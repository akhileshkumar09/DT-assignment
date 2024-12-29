/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        triangle: "polygon(0 0, 100% 0, 0 100%)",
      },
    },
  },
  plugins: [
   ('@tailwindcss/forms'),
    ('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      addUtilities({
        '.clip-triangle': {
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        },
      });
    },
  ],
}

