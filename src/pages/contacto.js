import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionImage from "../components/section-image"

const ContactPage = () => {

  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "map.png" }) {
        childImageSharp {
          fluid(quality: 100) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      maritim: file(relativePath: { eq: "services/maritim.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      aduanal: file(relativePath: { eq: "services/aduanal.png" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      intermodal: file(relativePath: { eq: "services/intermodal.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(

    <Layout afterHeader={
      <div className="border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-start">
              <ul className="nav">
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link px-2 py-2" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="mdi mdi-facebook text-primary"> </i></a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com/dovlius" className="nav-link px-2 py-2" target="_blank" rel="noopener noreferrer" title="Pinterest"><i className="mdi mdi-pinterest text-primary"> </i></a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 d-flex align-items-center justify-content-end text-primary small">
              <span><i className="mdi mdi-phone text-primary"> </i> (646) 978 5965 </span>
              <span><i className="mdi mdi-email ml-4 text-primary"> </i> info@bajacargosolutions.com </span>
            </div>
          </div>
        </div>
      </div>
    }>
        <SEO title="Ubicación estratégica" />

        <section className="container pt-5 rounded">
            <div className="px-5 d-flex flex-column align-items-center">

                <h1 className="h3">Baja Cargo Solutions</h1>
                {/* <h2 className="text-dark pb-3 text-center text-center">Soluciones en logística táctica en transporte Internacional</h2> */}
                <p className="text-center">Dedicados a dar un trato personalizado cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
            </div>
        </section>

        <section className="container py-5 pulse animated">
            <Img fluid={data.hero.childImageSharp.fluid} className="rounded" alt="Logistica" />
        </section>

        <SectionImage 
            tag="Ubicados estratégicamente"
            title="Baja Cargo Solutions"
            paragraph={["Somos una empresa Mexicana, ubicados estratégicamente en el puerto de Ensenada de Baja California, dedicados a dar un trato personalizado de soluciones en logística táctica en transporte Internacional cumpliendo en tiempo y forma los requerimientos de nuestros clientes."]}
            src={<Img fluid={data.about.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            // link={{to: "/servicios", title: "Ver más servicios"}}
        />

      <section className="container pt-5 pb-4 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">Somos la solución confiable para tu carga.</h2>
            <p className="text-center">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 pb-5">
            <div className="pb-5">
                <h5 className="text-dark pb-2">Transporte Terrestre</h5>
                <p>Siempre buscando el beneficio de nuestros clientes asesorando en la logística de su cadena de
                    suministros y entregas foráneas.</p>
            </div>
            <div className="pb-5">
                <h5 className="text-dark pb-2">Transporte Marítimo</h5>
                <p>Coordinación de fletes marítimos para carga seca, material peligroso, material frágil, contenedores
                    refrigerados, carga sobredimensionada, etc.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 pb-5">
            <div className="pb-5">
                <h5 className="text-dark pb-2">Transporte Intermodal</h5>
                <p>Servicios combinados de transporte para optimizar y bajar costos en distancias largas, transbordos,
                    consolidación y des consolidación de cargas.</p>
            </div>
            <div className="pb-5">
                <h5 className="text-dark pb-2">Despacho Aduanal</h5>
                <p>Contamos con agentes aduanales para realizar todo tipo de trámite aduanal para sus importaciones y
                    exportaciones.</p>
            </div>
          </div>
          <div className="col pb-5 d-flex justify-content-center">
            <Link to="/servicios" className="btn btn-primary rounded">Ver todos los servicios</Link>
          </div>
        </div>

      </section>

    </Layout>
  )
}

export default ContactPage
