/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Top from "./top"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title,
          description,
          socialMedia {
            facebook,
            weChat
          },
          phone,
          email
        }
      }
    }
  `)

  return (
    <>
      <Top metaData={data.site.siteMetadata} />
      <Header 
        siteTitle={data.site.siteMetadata.title}  
        nav={[
          {to: '/', link: 'Inicio'},
          {to: '/servicios', link: 'Servicios'},
          {to: '/nosotros', link: 'Nosotros'}
        ]}
        action={{to: '/contacto', link: 'Contactar ahora'}}
      />
      
      <main className="section bg-light">{children}</main>

      <Footer metaData={data.site.siteMetadata} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
