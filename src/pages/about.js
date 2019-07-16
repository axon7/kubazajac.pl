import React from "react"
import styled from "styled-components"
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

const About = () => (
  <StyledWrapper>
    <Header />
    <StyledMain>
      {/* <SEO title="Home" /> */}

      <h1>hi from About</h1>
    </StyledMain>
  </StyledWrapper>
)

export default About
