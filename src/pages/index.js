import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import thunderbg from "../images/thunderbg.jpg"

const StyledMain = styled.main`
  width: 100%;
  background-color: #5c3479;
  height: 100%;
  color: white;
`

const Background = styled.div`
  background-image: url(${thunderbg});
  height: 500px;
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
  background-color: purple;
  height: 700px;
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
          <p style={{ margin: "0 auto", paddingTop: "30px" }}>PORTFOLIO</p>
          <p style={{ margin: "0 auto", paddingTop: "30px" }}>Projects here</p>
        </StyledMainText>
      </Lorem>
    </StyledMain>
  </Layout>
)

export default IndexPage
