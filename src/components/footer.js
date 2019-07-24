// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const StyledFooter = styled.footer`
  background-color: #663399;
  height: 15vh;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIconsDiv = styled.div`
  font-size: 60px;
  display: flex;
  justify-items: center;
  align-items: center;
  max-width: 600px;
`
// import { Helmet } from "react-helmet"

const Footer = () => (
  <StyledFooter>
    <StyledIconsDiv>
      <a href="https://github.com/axon7" style={{ color: "white" }}>
        <FaGithub style={{ marginRight: "10px" }} />
      </a>
      <a href="https://linkedin.com" style={{ color: "white" }}>
        <FaLinkedin style={{ marginLeft: "10px" }} />
      </a>
    </StyledIconsDiv>
  </StyledFooter>
)

export default Footer
