import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
// import { Helmet } from "react-helmet"

const StyledHeader = styled.div`
  background-color: #663399;
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
  margin-left: 30px;
`
const Li = styled.li`
  margin-right: 6%;
`

const Header = () => (
  <StyledHeader>
    <h3
      style={{
        marginLeft: "6%",
        marginTop: "auto",
        marginBottom: "auto",
        marginRight: "40px",
      }}
    >
      <Link style={{ textDecoration: "none", color: "white" }} to="/">
        Kuba
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
        <Link
          style={{ textDecoration: "none", color: "white", marginRight: "0px" }}
          to="/contact"
        >
          CONTACT
        </Link>
      </Li>
    </Ul>
  </StyledHeader>
)

export default Header
