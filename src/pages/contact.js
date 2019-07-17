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

const Contact = () => (
  <Layout>
    <StyledMain>
      <SEO title="contact" />

      <h1>Hi from CONTACT</h1>
    </StyledMain>
  </Layout>
)

export default Contact
