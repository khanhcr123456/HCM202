/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Georgia', 'serif'],
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#17261f',
        paper: '#f6f4ed',
        moss: '#315846',
        coral: '#d96b4c',
        sand: '#e9dfcb',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(37, 57, 44, 0.09)',
      },
    },
  },
  plugins: [],
}
