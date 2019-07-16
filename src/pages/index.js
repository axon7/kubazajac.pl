import React from "react"
import { Link } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"
import Header from "../components/header"

// import SEO from "../components/seo"
const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ff7659;
`

const StyledMain = styled.main`
  width: 100%;
  height: 90vh;
  background-color: #0a7caf;
  display: flex;
  justify-content: center;
  align-items: center;
`

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
   margin: 0;
   font-family: "Montserrat";
   color: white;
  }

 * {
   box-sizing: border-box;
 }
`

const IndexPage = () => (
  <StyledWrapper>
    <GlobalStyle />
    <Header />
    <StyledMain>
      {/* <SEO title="Home" /> */}

      <h1>Hi people</h1>
    </StyledMain>
  </StyledWrapper>
)

export default IndexPage
