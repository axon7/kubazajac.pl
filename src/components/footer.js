// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const StyledFooter = styled.footer`
  background-color: black;
  height: 15vh;
  width: 100%;
  color: white;
`

const StyledP = styled.p`
  margin: 0 auto;
  text-align: center;
  font-size: 60px;
`
// import { Helmet } from "react-helmet"

const Footer = () => (
  <StyledFooter>
    <StyledP>
      <FaLinkedin />
      <FaGithub />
    </StyledP>
  </StyledFooter>
)

export default Footer
