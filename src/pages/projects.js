import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledMain = styled.main`
  width: 100%;
  height: 90vh;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectsList = styled.section`
  width: 60%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  height: 100%;
`

// const ProjectDescription = styled.div``

const Projects = () => (
  <Layout>
    <StyledMain>
      <SEO title="about" />

      <ProjectsList>
        <div>
          <a href="https://axon7.github.io/weather-app/">
            Weather application using geolocation
          </a>
        </div>
        <div>
          <a href="https://chatu-chatu.herokuapp.com">
            Chatu-Chatu, real-time chat app
          </a>
        </div>
        <div>
          <a href="/">
            Album Reviews full-stack application in MERN stack (in progress)
          </a>
        </div>
      </ProjectsList>
    </StyledMain>
  </Layout>
)

export default Projects
