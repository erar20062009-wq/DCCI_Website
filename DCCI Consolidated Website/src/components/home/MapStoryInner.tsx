'use client'

import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useRouter } from 'next/navigation'
import { OUTREACH_COUNTIES } from '@/lib/data/counties'

// ─── Map configuration ────────────────────────────────────────────────────────

const STYLE_URL = 'https://tiles.openfreemap.org/styles/positron'

// Camera start: full Florida context (statewide)
const CAMERA_START = { center: [-84.2, 27.0] as [number, number], zoom: 5.5 }
// Camera end:   Big Bend regional focus
const CAMERA_END   = { center: [-84.2, 30.45] as [number, number], zoom: 8.5 }

// ─── Utilities ────────────────────────────────────────────────────────────────

function lerp(a: number, b: number, t: number) { return a + (b - a) * t }

// Smooth cubic easing for the camera transition
function smoothstep(t: number) {
  const c = Math.max(0, Math.min(1, t))
  return c * c * (3 - 2 * c)
}

// ─── Marker CSS — injected once into document head ────────────────────────────

const MARKER_CSS = `
  .map-county-marker {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    cursor: pointer;
    outline: none;
  }
  .map-county-marker-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid #6b9eb5;
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .map-county-marker:hover .map-county-marker-ring,
  .map-county-marker:focus-visible .map-county-marker-ring {
    opacity: 0.55;
    transform: scale(1.15);
  }
  .map-county-marker-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #6b9eb5;
    border: 2.5px solid white;
    box-shadow: 0 2px 6px rgba(0,0,0,0.22);
    position: relative;
    z-index: 1;
    transition: transform 0.18s ease, background 0.18s ease;
  }
  .map-county-marker:hover .map-county-marker-dot,
  .map-county-marker:focus-visible .map-county-marker-dot {
    transform: scale(1.3);
    background: #4a8098;
  }
  .map-county-marker-label {
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    background: white;
    color: #2d2926;
    font-size: 11px;
    font-weight: 600;
    font-family: inherit;
    padding: 3px 10px;
    border-radius: 9999px;
    white-space: nowrap;
    box-shadow: 0 2px 8px rgba(0,0,0,0.13);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.15s ease;
  }
  .map-county-marker:hover .map-county-marker-label,
  .map-county-marker:focus-visible .map-county-marker-label {
    opacity: 1;
  }
  /* Attribution — compact, legible but unobtrusive */
  .maplibregl-ctrl-attrib {
    font-size: 10px !important;
    opacity: 0.6;
    background: rgba(255,255,255,0.85) !important;
  }
  .maplibregl-ctrl-attrib a { color: inherit; }
  .maplibregl-ctrl-bottom-right { z-index: 1; }
`

// ─── Public API (exposed to parent via onReady callback) ─────────────────────

export interface MapStoryAPI {
  updateCamera: (progress: number) => void
  showMarkers:  (show: boolean)    => void
}

// ─── Props ────────────────────────────────────────────────────────────────────

interface Props {
  onReady:       (api: MapStoryAPI) => void
  reducedMotion: boolean
  className?:    string
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function MapStoryInner({ onReady, reducedMotion, className = '' }: Props) {
  const containerRef     = useRef<HTMLDivElement>(null)
  const mapRef           = useRef<maplibregl.Map | null>(null)
  const markersRef       = useRef<HTMLElement[]>([])
  // Capture props at mount time — effect runs once deliberately
  const onReadyRef       = useRef(onReady)
  const reducedMotionRef = useRef(reducedMotion)
  const router           = useRouter()

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    // Inject marker + attribution CSS once globally
    if (!document.getElementById('map-story-styles')) {
      const styleEl = document.createElement('style')
      styleEl.id = 'map-story-styles'
      styleEl.textContent = MARKER_CSS
      document.head.appendChild(styleEl)
    }

    const rm         = reducedMotionRef.current
    const initCamera = rm ? CAMERA_END : CAMERA_START

    const map = new maplibregl.Map({
      container:          containerRef.current,
      style:              STYLE_URL,
      center:             initCamera.center,
      zoom:               initCamera.zoom,
      // All gestures disabled — scroll progress drives the camera.
      // Keeping them off at the final stage avoids map scroll-zoom hijacking page scroll.
      dragPan:            false,
      dragRotate:         false,
      scrollZoom:         false,
      touchZoomRotate:    false,
      doubleClickZoom:    false,
      keyboard:           false,
      boxZoom:            false,
      // Attribution managed manually so we can position and style it
      attributionControl: false,
    })

    map.addControl(
      new maplibregl.AttributionControl({ compact: true }),
      'bottom-right'
    )

    map.on('load', () => {
      const markerEls: HTMLElement[] = []

      OUTREACH_COUNTIES.forEach(county => {
        // Build the marker element from plain DOM — avoids Tailwind purge issues
        const el = document.createElement('div')
        el.className = 'map-county-marker'
        el.setAttribute('role', 'button')
        el.setAttribute('tabindex', '0')
        el.setAttribute('aria-label', `${county.name} County — View dementia outreach events`)
        // Hidden until scroll reaches stage 3 (or always visible in reduced-motion mode)
        el.style.display = rm ? 'flex' : 'none'

        const ring = document.createElement('span')
        ring.className = 'map-county-marker-ring'
        ring.setAttribute('aria-hidden', 'true')

        const dot = document.createElement('span')
        dot.className = 'map-county-marker-dot'
        dot.setAttribute('aria-hidden', 'true')

        const label = document.createElement('span')
        label.className = 'map-county-marker-label'
        label.textContent = county.name
        label.setAttribute('aria-hidden', 'true')

        el.appendChild(ring)
        el.appendChild(dot)
        el.appendChild(label)

        const navigate = () => router.push(county.path)
        el.addEventListener('click', navigate)
        el.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate() }
        })

        new maplibregl.Marker({ element: el })
          .setLngLat([county.lng, county.lat])
          .addTo(map)

        markerEls.push(el)
      })

      markersRef.current = markerEls

      // Expose API to parent
      onReadyRef.current({
        updateCamera(progress: number) {
          if (rm || !mapRef.current) return
          const t = smoothstep(progress)
          mapRef.current.jumpTo({
            center: [
              lerp(CAMERA_START.center[0], CAMERA_END.center[0], t),
              lerp(CAMERA_START.center[1], CAMERA_END.center[1], t),
            ],
            zoom: lerp(CAMERA_START.zoom, CAMERA_END.zoom, t),
          })
        },
        showMarkers(show: boolean) {
          markersRef.current.forEach(el => {
            el.style.display = show ? 'flex' : 'none'
          })
        },
      })
    })

    mapRef.current = map

    return () => {
      markersRef.current = []
      map.remove()
      mapRef.current = null
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return <div ref={containerRef} className={`w-full h-full ${className}`} />
}
