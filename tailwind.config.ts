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
        accent: {
          DEFAULT: '#E8FF6B',
          dark: '#4A4A00',
        },
        surface: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
} satisfies Config
