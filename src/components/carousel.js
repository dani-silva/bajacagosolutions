import React from "react"
// import {useState} from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "carousel/Vector.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          },
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      logo: file(relativePath: { eq: "carousel/Vector.png" }) {
        childImageSharp {
          fixed(height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <section className="hero">
      <div className="container h-100 d-flex flex-column justify-content-center py-4">
        <div className="row">
          <div className="p-5 rounded bg-transparent col-lg-7 col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-start animated bounceInLeft">
            <h2 className="text-white tag">Logística personalizada a tus necesidades.</h2>
            <p className="h1 text-white mb-4 animated bounceInLeft delay-1s">Somos la solución confiable para tu carga.</p>
            <p className="text-white">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p>
            
            <Link to="/contacto" className="btn rounded mt-3 btn-light shadow animated fadeIn delay-1s">
              Contactar ahora
            </Link>
          </div>
          {/* <Img fluid={data.first.childImageSharp.fluid} className="hero-image" /> */}
        </div>

      </div>
    </section>
  )
}

export default Slider
