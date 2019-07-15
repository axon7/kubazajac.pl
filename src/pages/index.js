import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

// import SEO from "../components/seo"
const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  body {
   background-color: red;
   margin: 0;
  }
`

const IndexPage = () => (
  <StyledWrapper>
    <GlobalStyle />
    {/* <SEO title="Home" /> */}
    <h1>Hi people</h1>

    <Link to="/page-2/">Go to page 2</Link>
  </StyledWrapper>
)

export default IndexPage
