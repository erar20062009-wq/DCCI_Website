'use client'

import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { NAV_LINKS } from '@/lib/utils/constants'

const sectionColors: Record<string, string> = {
  lavender: 'text-lavender-600 bg-lavender-50',
  teal: 'text-teal-700 bg-teal-50',
  healthblue: 'text-healthblue-700 bg-healthblue-50',
  sage: 'text-sage-700 bg-sage-50',
  warmgray: 'text-warmgray-700 bg-warmgray-100',
}

export default function DesktopNav() {
  const pathname = usePathname()

  return (
    // No Viewport — Content renders inside each Item so it naturally positions
    // below its own trigger via the Item's implicit position:relative.
    <NavigationMenu.Root className="hidden lg:flex relative" delayDuration={100}>
      <NavigationMenu.List className="flex items-center gap-1">
        {NAV_LINKS.map((item) => {
          const isActive = pathname.startsWith(item.href)
          const colorClass = sectionColors[item.color] || sectionColors.warmgray

          if (!('children' in item)) {
            return (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150',
                      'text-warmgray-700 hover:text-warmgray-900 hover:bg-warmgray-100',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500',
                      isActive && 'text-lavender-700 bg-lavender-50'
                    )}
                  >
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            )
          }

          return (
            <NavigationMenu.Item key={item.href} className="relative">
              <NavigationMenu.Trigger
                className={cn(
                  'group flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-150',
                  'text-warmgray-700 hover:text-warmgray-900 hover:bg-warmgray-100',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500',
                  'data-[state=open]:bg-warmgray-100 data-[state=open]:text-warmgray-900',
                  isActive && 'text-lavender-700 bg-lavender-50'
                )}
              >
                {item.label}
                <ChevronDown
                  className="w-4 h-4 text-warmgray-400 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </NavigationMenu.Trigger>

              {/* Without Viewport, Content renders as a child of this Item and
                  positions itself via absolute relative to the Item's box.
                  top-[calc(100%+0.5rem)] puts it just below the trigger with a gap. */}
              <NavigationMenu.Content
                className={cn(
                  'absolute top-[calc(100%+0.5rem)] left-0 z-50 min-w-[520px]',
                  'bg-white rounded-2xl shadow-mega border border-warmgray-100',
                  'overflow-hidden',
                  'data-[state=open]:animate-fade-in',
                  'data-[state=closed]:animate-fade-out'
                )}
              >
                <div className="p-5">
                  <div className={cn('mb-4 p-3 rounded-xl text-sm', colorClass)}>
                    <div className="font-semibold">{item.label}</div>
                    <div className="opacity-80 text-xs mt-0.5">{item.description}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    {('children' in item) && item.children?.map((child: { href: string; label: string; description: string }) => (
                      <NavigationMenu.Link key={child.href} asChild>
                        <Link
                          href={child.href}
                          className={cn(
                            'group flex flex-col gap-0.5 rounded-lg p-3 transition-all duration-150',
                            'hover:bg-warmgray-50',
                            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500',
                            pathname === child.href && 'bg-lavender-50'
                          )}
                        >
                          <span className={cn(
                            'text-sm font-medium text-warmgray-900 transition-colors',
                            'group-hover:text-lavender-700',
                            pathname === child.href && 'text-lavender-700'
                          )}>
                            {child.label}
                          </span>
                          <span className="text-xs text-warmgray-500 leading-relaxed">
                            {child.description}
                          </span>
                        </Link>
                      </NavigationMenu.Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-warmgray-100">
                    <NavigationMenu.Link asChild>
                      <Link
                        href={item.href}
                        className="text-xs font-medium text-lavender-600 hover:text-lavender-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender-500 rounded"
                      >
                        View all {item.label} →
                      </Link>
                    </NavigationMenu.Link>
                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
          )
        })}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  )
}
