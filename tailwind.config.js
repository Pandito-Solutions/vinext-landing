/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'cf-primary': '#fc7c1e',
        'cf-primary-light': '#ffa945',
        'cf-ship-gray': '#404041',
      },
    },
  },
  plugins: [],
};
