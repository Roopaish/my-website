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
        slideUp: 'slideUp 10s linear infinite;',
        slideDown: 'slideDown 10s linear infinite;',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            transform:
              'translate3d(0, -600px, 0)' /* The image container height */,
          },
        },
        slideDown: {
          '0%': {
            transform:
              'translate3d(0, -600px, 0)' /* The image container height */,
          },
          '100%': {
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
};
