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

const Projects = () => (
  <StyledWrapper>
    <Header />
    <StyledMain>
      {/* <SEO title="Home" /> */}

      <h1>hi from projects</h1>
    </StyledMain>
  </StyledWrapper>
)

export default Projects
