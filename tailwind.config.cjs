/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/footer.jpg')",
        'footer-texture': "url('/footer.jpg')",
        'old-pensum': "url(/antiguopensum.jpg)",
        'teleco' :"url(/telecomunicaciones.jpg)"
      },
      colors: {
        primary: {
          50: "#e8ebf0",
          100: "#b7c2d1",
          200: "#95a5bb",
          300: "#647c9c",
          400: "#466289",
          500: "#183b6b",
          600: "#163661",
          700: "#112a4c",
          800: "#0d203b",
          900: "#0a192d",
        },
        secondary: {
          50: "#f4e8e8",
          100: "#dcb9b8",
          200: "#cb9796",
          300: "#b36866",
          400: "#a54a49",
          500: "#8e1d1b",
          600: "#811a19",
          700: "#651513",
          800: "#4e100f",
          900: "#3c0c0b",
        },
      },
    },
  },
};
