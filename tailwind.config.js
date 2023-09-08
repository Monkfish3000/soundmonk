/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#3b2d4c',
        'custom-purple-light': '#F4EFFB',
        'custom-purple-medium': '#B6A5CA',
        'custom-raisin-black': '#140F1A',
      },
    },
  },
  plugins: [],
};
