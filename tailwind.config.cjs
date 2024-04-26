/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [require("tailwindcss-animated")],
  theme: {
    extend: {
      gridTemplateRows: {
        card: "auto 1fr auto",
        "home-mobile": "auto auto auto",
      },
      gridTemplateColumns: {
        home: "auto auto auto",
        card: "auto 1fr auto",
      },
      backgroundImage: {
        footer: "url(/banners/footer.webp)",
        "banner-old-pensum": "url(/banners/oldpensum.webp)",
        "banner-about": "url(/banners/about-image.webp)",
        "banner-applicants": "url(/banners/aspirantes.webp)",
        "banner-teleco": "url(/banners/technology.webp)",
        "banner-elective": "url(/banners/elective.webp)",
        "banner-electronic": "url(/banners/electronic.webp)",
        "banner-modalities": "url(/banners/modalidades.webp)",
        "banner-students": "url(/banners/students.webp)",
        "banner-businessmen": "url(/banners/empresarios.webp)",
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
