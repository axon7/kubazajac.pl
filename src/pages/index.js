import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thunderbg from "../images/thunderbg.jpg"
import project1 from "../images/project1.png"

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
  margin: 0;
`

const Lorem = styled.div`
  background-color: black;
  height: 60%;
  font-family: "Nunito";
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
          <h5>I'm Web Developer</h5>
        </StyledMainText>
      </Background>
      <Lorem>
        <StyledMainText>
          <p
            style={{
              margin: "0 auto",
              paddingTop: "30px",
              marginBottom: "30px",
            }}
          >
            Latest project:{" "}
          </p>
          <a href="https://chingu-voyages.github.io/v9-geckos-team-12/">
            <img
              src={project1}
              alt="project 1"
              style={{ width: "70%", maxWidth: "600px" }}
            />
            <p
              style={{
                margin: "0 auto",
                paddingTop: "30px",
                marginBottom: "40px",
              }}
            >
              Click to visit
            </p>
          </a>
        </StyledMainText>
      </Lorem>
    </StyledMain>
  </Layout>
)

export default IndexPage
