import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [
    './app/**/*.{vue,js,ts}',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        // CODATA-inspired palette: blues, whites, grays
        accent: {
          DEFAULT: '#2563EB',  // blue-600 – CTAs, links, hovers
          hover:   '#1D4ED8',  // blue-700 – hover state
          light:   '#60A5FA',  // blue-400 – dark-mode accent
          muted:   '#DBEAFE',  // blue-100 – soft tint backgrounds
        },
        brand: {
          DEFAULT: '#1E3A8A',  // blue-900 – deep navy brand color
          mid:     '#1D4ED8',  // blue-700 – mid-range brand
        },
        surface: {
          DEFAULT: '#0F1F40',  // dark navy surface
          light:   '#1E2D4A',  // slightly lighter navy
        },
        border: {
          DEFAULT: '#E2E8F0',  // slate-200 – light mode border
          dark:    '#1E2D4A',  // dark mode border
        },
        text: {
          primary:    '#0F172A',  // slate-900
          secondary:  '#475569',  // slate-600
          muted:      '#94A3B8',  // slate-400
          inverted:   '#F1F5F9',  // slate-100
        },
        bg: {
          DEFAULT: '#F8FAFC',  // slate-50  – light bg
          subtle:  '#F1F5F9',  // slate-100 – subtle section bg
          dark:    '#060F1E',  // very dark navy – dark mode bg
          card:    '#FFFFFF',  // card bg light
          'card-dark': '#0D1B38', // card bg dark
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config
