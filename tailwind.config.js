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
      animation: {
        slideUp: 'slideUp 20s linear infinite;',
        slideDown: 'slideDown 20s linear infinite;',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform:
              'translate3d(0, 0px, 0)' /* The image container height */,
          },
          '100%': {
            transform:
              'translate3d(0, -1680px, 0)' /* The image container height: 320*5+16*5 */,
          },
        },
        slideDown: {
          '0%': {
            transform: 'translate3d(0, -1680px, 0)',
          },
          '100%': {
            transform: 'translate3d(0, 0px, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
