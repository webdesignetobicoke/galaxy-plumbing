import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#030812', 900: '#060f24', 800: '#0a1535', 700: '#0f1d47', 600: '#162454' },
        gold: { 300: '#fde68a', 400: '#f5c842', 500: '#e8a800', 600: '#c98f00' },
        cream: '#f8f6f1',
        fog: '#f0eee9',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        display: ['var(--font-display)'],
        condensed: ['var(--font-condensed)'],
      },
    },
  },
  plugins: [],
}
export default config
