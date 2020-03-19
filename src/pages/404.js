import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
  
  const data = useStaticQuery(graphql`
    query {
      error: file(relativePath: { eq: "404.png" }) {
        childImageSharp {
          fluid(quality: 50) {
              ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Página encontrada" />
      <section className="container">
        <section className="container pt-5 pb-5 rounded">
          <h1 className="text-dark pb-3 text-center text-center">Página no encontrada</h1>
          <Img fluid={data.error.childImageSharp.fluid} className="rounded m-5" />
          <div className="px-5 d-flex flex-column align-items-center py-5">
            <span className="tag">Baja Cargo Solutions</span>
            <h2 className="text-dark pb-3 text-center text-center">Soluciones en logística táctica en transporte Internacional</h2>
            <p className="text-center">Dedicados a dar un trato personalizado cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
            <Link to="/" className="btn btn-primary rounded">Ir a inicio</Link>
          </div>
        </section>

      </section>
    </Layout>
  )
}

export default NotFoundPage
