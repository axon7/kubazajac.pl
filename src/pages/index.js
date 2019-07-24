import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thunderbg from "../images/thunderbg.jpg"
import project1 from "../images/project1.png"
import Button from "../components/Button"
import { Link } from "gatsby"
const StyledMain = styled.main`
  width: 100%;
  background-color: #663399;
  height: 100%;
  color: white;
`

const Background = styled.div`
  background-image: url(${thunderbg});
  height: 750px;
  width: 100%;
  margin: 0 auto;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const StyledMainText = styled.div`
  text-align: center;
  font-size: 27px;
  font-family: "Nunito";
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
`

const StyledProjectsInfo = styled.div`
  text-align: center;
  font-size: 27px;
  font-family: "Nunito";
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  height: 100%;
  min-height: 500px;
`

const IndexPage = () => (
  <Layout>
    <StyledMain>
      <SEO title="home" />
      <Background>
        <StyledMainText>
          <h1>
            Hi, I'm Kuba!{" "}
            <span role="img" aria-label="hi-emoji">
              👋
            </span>
          </h1>
          <h5>I'm self-taught web developer</h5>
        </StyledMainText>
      </Background>
      <StyledProjectsInfo>
        <h4
          style={{
            margin: "0 auto",
            paddingTop: "30px",
            marginBottom: "30px",
          }}
        >
          Latest project:{" "}
        </h4>
        <a
          href="https://chingu-voyages.github.io/v9-geckos-team-12/"
          style={{ maxWidth: "500px" }}
        >
          <img
            src={project1}
            alt="project 1"
            style={{ width: "100%", maxWidth: "900px" }}
          />
        </a>

        <Button as={Link} to="/projects">
          {" "}
          View more projects
        </Button>
      </StyledProjectsInfo>
    </StyledMain>
  </Layout>
)

export default IndexPage
