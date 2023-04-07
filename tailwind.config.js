/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#0067DE',
          dark: '#47AAFF'
        }
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    }
  },
  plugins: []
}
