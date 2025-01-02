/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#EF4444',
        secondary: '#DC2626',
        black: '#030712',
        white: '#F9FAFB',
      },
    },
  },
  plugins: [],
}
