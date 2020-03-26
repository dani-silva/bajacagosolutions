import React from "react"
// import {useState} from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Slider = ({en = false}) => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "carousel/hero.jpg" }) {
        childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="hero">
      <Img fluid={data.background.childImageSharp.fluid} className="background" />
      <div className="container h-100 d-flex flex-column justify-content-center py-4">
        <div className="row">
          <div className="p-5 m-1 m-sm-0 rounded bg-transparent col-lg-7 col-md-10 col-sm-12 d-flex flex-column justify-content-center align-items-start animated bounceInLeft">
            <h2 className="text-white tag">{en ? "Logistics service provider." : "Logística personalizada a tus necesidades."}</h2>
            <p className="h1 text-white mb-4 animated bounceInLeft delay-1s">{en ? "We are your reliable cargo solution" : "Somos la solución confiable para tu carga."}</p>
            <p className="text-white">{en ? "Baja Cargo Solutions is your solution for Ocean, Intermodal and 3PL Distribution Services." : "Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México."}</p>
            <div className="mt-3">
              <Link to={en ? "/contact-us" : "/contacto"} className="btn rounded btn-light shadow animated fadeIn delay-1s">
                {en ? "Contact us" : "Contactar Ahora"}
              </Link>
              <Link to={en ? "services" : "/servicios"} className="btn ml-3 btn-outline-light shadow animated fadeIn delay-2s">
                {en ? "Services" : "Ver Servicios"}
              </Link>

            </div>
          </div>
          {/* <Img fluid={data.first.childImageSharp.fluid} className="hero-image" /> */}
        </div>

      </div>
    </section>
  )
}

export default Slider
