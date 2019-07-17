// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`
  background-color: pink;
  height: 15vh;
  width: 100%;
`

const StyledP = styled.p`
  margin: 0 auto;
`
// import { Helmet } from "react-helmet"

const Footer = () => (
  <StyledFooter>
    <StyledP>icons</StyledP>
  </StyledFooter>
)

export default Footer
