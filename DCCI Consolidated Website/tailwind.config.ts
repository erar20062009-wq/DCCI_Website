import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}',
    './sanity/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        cream: {
          50:  '#fefdf8',
          100: '#fdf8ef',
          200: '#faf0d7',
          300: '#f5e4b8',
          400: '#edd08a',
          500: '#e3b95e',
        },
        warmgray: {
          50:  '#faf9f7',
          100: '#f3f2ee',
          200: '#e8e5de',
          300: '#d6d2c8',
          400: '#b5b0a3',
          500: '#8f8a7e',
          600: '#6b6660',
          700: '#524f4a',
          800: '#3a3835',
          900: '#252320',
        },
        sage: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        teal: {
          50:  '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
        },
        healthblue: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        emergency: {
          50:  '#fff5f5',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'header-height': '4.5rem',
        'helpbar-height': '2.5rem',
        'total-bar': '7rem',
      },
      boxShadow: {
        'header': '0 1px 3px 0 rgb(0 0 0 / 0.08)',
        'header-scrolled': '0 4px 24px 0 rgb(0 0 0 / 0.10)',
        'card': '0 2px 8px 0 rgb(0 0 0 / 0.06), 0 1px 2px 0 rgb(0 0 0 / 0.04)',
        'card-hover': '0 8px 32px 0 rgb(0 0 0 / 0.12)',
        'mega': '0 20px 60px 0 rgb(0 0 0 / 0.12)',
        'overlay': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-out': {
          from: { opacity: '1', transform: 'translateY(0)' },
          to: { opacity: '0', transform: 'translateY(-8px)' },
        },
        'slide-in-right': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        },
        'scale-in': {
          from: { opacity: '0', transform: 'scale(0.96)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'skeleton-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'progress': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(-30%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'backdrop-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 250ms cubic-bezier(0.4,0,0.2,1) both',
        'fade-in-up': 'fade-in-up 300ms cubic-bezier(0.4,0,0.2,1) both',
        'fade-out': 'fade-out 200ms cubic-bezier(0.4,0,0.2,1) both',
        'slide-in-right': 'slide-in-right 300ms cubic-bezier(0.4,0,0.2,1) both',
        'slide-out-right': 'slide-out-right 250ms cubic-bezier(0.4,0,0.2,1) both',
        'scale-in': 'scale-in 200ms cubic-bezier(0.4,0,0.2,1) both',
        'skeleton': 'skeleton-pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'progress': 'progress 1.5s cubic-bezier(0.4,0,0.2,1) infinite',
        'backdrop-in': 'backdrop-in 200ms ease both',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
