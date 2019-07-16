import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
   background-color: red;
   margin: 0;
   font-family: "Nunito"
  }
`

const Projects = () => (
  <>
    <GlobalStyle />

    <h1>Hi from the second page</h1>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Projects
