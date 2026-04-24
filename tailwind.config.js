/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'cream-dark': '#E8E0D0',
        terracotta: '#CC5833',
        'terracotta-dark': '#A8451F',
        moss: '#2E4036',
        'moss-light': '#3D5548',
        carbon: '#1C1C1C',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
