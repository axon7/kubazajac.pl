import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Nunito",
      styles: ["300", "400", "700"],
    },
  ],
  bodyFontFamily: ["Nunito", "sans-serif"],
  headerFontFamily: ["Nunito", "sans-serif"],
  linkFontFamily: ["Nunito", "sans-serif"],
})
export default typography
