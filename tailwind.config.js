/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screen: {
      xm: "320px", //
      sm: "640px", //
      md: "768px", // Tablet
      lg: "1024px", // Laptop Size
      xl: "1280px", //
      xll: "1440px", // Laptop Large Size
      "2xl": "1536px", //
    },
    extend: {
      backgroundImage: {
        "hero-img": "url('/public/assets/hero-img.png')",

        "shape-img":
          "url('https://shadab-developer.github.io/vulgax/assets/img/shape.png')",

        "login-reg--bg-img":
          "url('https://shadab-developer.github.io/vulgax/assets/img/background_login_reg.png')",
      },

      colors: {
        white: "#ffffff",
        grey: "#efefef",
        greyDark: "#313536",
        springWood: "#f9f0ea",
        black: "#000000",
        blue: "#3765a3",
        orange: "#F27405",
        yellow: "#F6B360",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        JustSignature: ["Just Signature", "sans-serif"],
      },
    },
  },
  plugins: [],
};
