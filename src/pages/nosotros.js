import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionImage from "../components/section-image"

const AboutPage = () => {

  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      hero: file(relativePath: { eq: "carousel/hero-2.png" }) {
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

    <Layout>
        <SEO title="Logistica en transporte internacional" />
        
        <section className="container py-5 pulse animated">
            <Img fluid={data.hero.childImageSharp.fluid} className="rounded" alt="Logistica" />
        </section>

        <section className="container pt-5 pb-5 rounded">
            <div className="px-5 d-flex flex-column align-items-center">

                <h1 className="tag">Baja Cargo Solutions</h1>
                <h2 className="text-dark pb-3 text-center text-center">Soluciones en logística táctica en transporte Internacional</h2>
                <p className="text-center">Dedicados a dar un trato personalizado cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
                {/* <Link to="paginas-web" className="btn btn-primary rounded">Ver los servicios</Link> */}
            </div>
        </section>

        <SectionImage 
            tag="Ubicados estratégicamente"
            title="Baja Cargo Solutions"
            paragraph={["Somos una empresa Mexicana, ubicados estratégicamente en el puerto de Ensenada de Baja California, dedicados a dar un trato personalizado de soluciones en logística táctica en transporte Internacional cumpliendo en tiempo y forma los requerimientos de nuestros clientes."]}
            src={<Img fluid={data.about.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            link={{to: "/servicios", title: "Ver más servicios"}}
        />

        <SectionImage 
            tag="Logística personalizada"
            title="Exportación e importación"
            paragraph={["Amplia experiencia en la exportación e importación de plásticos reciclables como Scrap, Flakes y Pellets. Con la ventaja de conocer de primera mano las necesidades de importadores, exportadores y demás actores del comercio internacional en el puerto de Ensenada BC."]}
            src={<Img fluid={data.maritim.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            link={{to: "contacto", title: "Contactar ahora"}}
            list={[
                "FLT y LTL doméstico y entre México y Estados Unidos y Canadá.",
                "Servicios Puerta a Puerta.",
                "Carga seca: Camión Remolque, Remolque articulado",
                "Maquinaria pesada: Cama baja"
            ]}
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

export default AboutPage
