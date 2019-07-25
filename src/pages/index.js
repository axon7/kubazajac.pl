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
  flex-direction: column;
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
  font-size: 1.3em;
  font-family: "Nunito";
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
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
          <h5>I'm 24 years old self-taught web developer</h5>
        </StyledMainText>
      </Background>
      <StyledProjectsInfo>
        <p style={{ marginTop: "20px", marginBottom: "10px" }}>
          My current stack of languages/technologies:
        </p>
        <p style={{ fontSize: "1em", marginTop: "0px" }}>
          <p style={{ color: "red" }}>
            <img
              style={{
                filter:
                  "invert(38%) sepia(80%) saturate(1060%) hue-rotate(340deg) brightness(89%) contrast(99%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/html5.svg"
            />{" "}
            <img
              style={{
                filter:
                  "invert(24%) sepia(54%) saturate(5276%) hue-rotate(191deg) brightness(94%) contrast(83%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/css3.svg"
            />{" "}
            <img
              style={{
                filter:
                  "invert(91%) sepia(55%) saturate(2932%) hue-rotate(337deg) brightness(98%) contrast(98%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/javascript.svg"
            />
            <img
              style={{
                filter:
                  "invert(90%) sepia(14%) saturate(5222%) hue-rotate(163deg) brightness(96%) contrast(105%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/react.svg"
            />{" "}
            <img
              style={{
                filter:
                  "invert(20%) sepia(21%) saturate(6424%) hue-rotate(254deg) brightness(97%) contrast(88%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              fill="#339933"
              src="https://unpkg.com/simple-icons@latest/icons/redux.svg"
            />{" "}
            <img
              style={{
                filter:
                  "invert(48%) sepia(14%) saturate(2347%) hue-rotate(71deg) brightness(99%) contrast(84%)",
                marginRight: "8px",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/node-dot-js.svg"
            />{" "}
            <img
              style={{
                filter:
                  "invert(20%) sepia(21%) saturate(6424%) hue-rotate(254deg) brightness(97%) contrast(88%)",
              }}
              alt="react"
              height="46"
              width="46"
              src="https://unpkg.com/simple-icons@latest/icons/gatsby.svg"
            />
          </p>
        </p>
        <h4
          style={{
            margin: "0 auto",
            paddingTop: "30px",
            marginBottom: "30px",
          }}
        >
          Featured project:{" "}
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

        <p>Shopping app built in team for collaborative platform - Chingu </p>
        <p style={{ marginTop: "0px" }}>
          Technologies used: React, Redux, MaterialUI
        </p>

        <Button as={Link} to="/projects">
          {" "}
          View more projects
        </Button>
      </StyledProjectsInfo>
    </StyledMain>
  </Layout>
)

export default IndexPage
