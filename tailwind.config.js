/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'grid-emerald-100': `linear-gradient(to right, #d1fae5 1px, transparent 1px),
          linear-gradient(to bottom, #d1fae5 1px, transparent 1px)`,
      },
    },
  },
  plugins: [],
};