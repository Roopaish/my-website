/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rabenue: ['var(--font-rabenue)', 'Inter', 'Helvetica', 'sans-serif'],
      },
      transitionProperty: {
        position: 'top, left, right, bottom',
        positionOpacity: 'top, left, right, bottom, opacity',
      },
    },
  },
  plugins: [],
};
