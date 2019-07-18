import React from "react"
import { createGlobalStyle } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: "Nunito";
    color: red;
  }

 * {
   box-sizing: border-box;
 }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
