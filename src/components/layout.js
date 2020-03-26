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

const Layout = ({ location, children, en = false }) => {
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
      <Top en={en} location={location} metaData={data.site.siteMetadata} />
      {
        en 
        ?
        <Header 
          siteTitle={data.site.siteMetadata.title}  
          nav={[
            {to: '/en', link: 'Home'},
            {to: '/services', link: 'Services'},
            {to: '/about-us', link: 'About us'}
          ]}
          action={{to: '/contact-us', link: 'Contact us'}}
        />
        :
          <Header 
            siteTitle={data.site.siteMetadata.title}  
            nav={[
              {to: '/', link: 'Inicio'},
              {to: '/servicios', link: 'Servicios'},
              {to: '/nosotros', link: 'Nosotros'}
            ]}
            action={{to: '/contacto', link: 'Contacto'}}
          />

      }
      
      <main className="section bg-light">{children}</main>

      <Footer en={en} metaData={data.site.siteMetadata} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
