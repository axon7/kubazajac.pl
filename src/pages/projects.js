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

const ProjectLink = styled.a`
  color: black;
  margin-bottom: 2rem;
  margin-top: 1rem;
  &:nth-child(1) {
    margin-top: 2rem;
  }
`

// const ProjectDescription = styled.div``

const Projects = () => (
  <Layout>
    <StyledMain>
      <SEO title="about" />

      <ProjectsList>
        <ProjectLink href="https://xd.adobe.com/view/02de1ca6-9b0d-4353-69ad-f2ed4e7a7cf0-74ef/?fullscreen">
          IMPLANTY24 - website prototype made in Adobe XD for dental clinic
        </ProjectLink>
        <ProjectLink href="https://axon7.github.io/weather-app/">
          Weather application using geolocation
        </ProjectLink>

        <ProjectLink href="https://chatu-chatu.herokuapp.com">
          Chatu-Chatu, real-time chat app
        </ProjectLink>

        <ProjectLink href="#">
          Album Reviews full-stack application in MERN stack (coming soon)
        </ProjectLink>
      </ProjectsList>
    </StyledMain>
  </Layout>
)

export default Projects
