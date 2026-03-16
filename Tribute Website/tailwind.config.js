/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      colors: {
        space: '#020510',
        'neon-blue': '#3b82f6',
        'neon-purple': '#8b5cf6',
        'neon-cyan': '#06b6d4',
      },
    },
  },
  plugins: [],
}
