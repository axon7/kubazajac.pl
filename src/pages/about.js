import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledMain = styled.main`
  width: 100%;
  height: 90vh;
  background-color: #0a7caf;
  display: flex;
  justify-content: center;
  align-items: center;
`

const About = () => (
  <Layout>
    <StyledMain>
      <SEO title="about" />

      <h1>Hi from about</h1>
    </StyledMain>
  </Layout>
)

export default About
