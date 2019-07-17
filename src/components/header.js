import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import { Helmet } from "react-helmet"

const StyledHeader = styled.div`
  background-color: black;
  height: 10vh;
  width: 100%;
  color: white;
  display: flex;
  align-content: center;
`

const Ul = styled.ul`
  padding: 0;
  margin-right: 50px;
  list-style: none;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`
const Li = styled.li`
  margin-right: 20px;
`

const Header = () => (
  <StyledHeader>
    <h3
      style={{
        marginLeft: "50px",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "40px",
      }}
    >
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        Kuba Zając
      </Link>
    </h3>
    <Ul style={{ display: "flex", flex: 1 }}>
      <Li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/about">
          ABOUT
        </Link>
      </Li>
      <Li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/projects">
          PROJECTS
        </Link>
      </Li>
      <Li>
        <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
          CONTACT
        </Link>
      </Li>
    </Ul>
  </StyledHeader>
)

export default Header
