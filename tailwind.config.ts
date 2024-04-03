import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },

      colors: {
        gray: {
          400: '#f1f1f0',
        },
        green: {
          500: '#5af78d',
        },
        indigo: {
          500: '#57c7fe',
        },
      },

      spacing: {
        '18': '4.5rem',
      },

      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-10px)' },
          '50%': { transform: 'translateX(10px)' },
          '75%': { transform: 'translateX(-10px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },

      animation: {
        shake: 'shake 0.25s ease-in-out',
      },

      boxShadow: {
        'outline-white': '0 0 0 1px rgba(255, 255, 255, 0.1)',
      },

      zIndex: {
        '100': '100',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

export default config
