/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'coquette-pink': '#FADADD',
        'coquette-blue': '#BBD2E1',
        'coquette-yellow': '#FFFDD0',
        'coquette-dark': '#4A4A4A',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}