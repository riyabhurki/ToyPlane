/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",      // ✅ include app/ pages
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",      // optional if using motionConfig etc.
  ],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'], // ✅ futuristic font
      },
      colors: {
        'praetorian-blue': '#3a7bd5',
        'praetorian-cyan': '#00d2ff',
      },
      blur: {
        xl: '40px',
      },
    },
  },
  plugins: [],
}
