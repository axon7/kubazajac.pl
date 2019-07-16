import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Montserrat",
      styles: ["300", "400", "700"],
    },
  ],
  bodyFontFamily: ["Montserrat", "sans-serif"],
  headerFontFamily: ["Montserrat", "sans-serif"],
  linkFontFamily: ["Montserrat", "sans-serif"],
})
export default typography
