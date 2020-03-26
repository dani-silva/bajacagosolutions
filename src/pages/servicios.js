import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionImage from "../components/section-image"

const ServicesPage = () => {

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
      terrestre: file(relativePath: { eq: "services/trailer.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
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
        <SEO title="Servicios de logistica" />

        <section className="container pt-5 pb-5 rounded">
            <div className="px-5 d-flex flex-column align-items-center">

                <h1 className="tag pt-5">Baja Cargo Solutions</h1>
                <h2 className="text-dark pb-3 text-center text-center">Soluciones en logística táctica en transporte Internacional</h2>
                <p className="text-center">Dedicados a dar un trato personalizado cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
                {/* <Link to="paginas-web" className="btn btn-primary rounded">Ver los servicios</Link> */}
            </div>
        </section>

        <SectionImage 
            tag="Ubicados estratégicamente"
            title="Transporte Terrestre"
            paragraph={[
              "Contamos con una amplia cartera de socios comerciales en servicios terrestres para los requerimientos estándar o servicios especializados en todo el territorio de Estados Unidos y México. Esto nos permite desarrollar estrategias personalizadas a las necesidades del cliente ofreciendo diferentes opciones en costos de acuerdo a sus requerimientos y necesidades.",
              "Siempre buscando el beneficio de nuestros clientes asesorando en la logística de su cadena de suministros y entregas foráneas."
            ]}
            src={<Img fluid={data.terrestre.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            // link={{to: "/servicios", title: "Ver más servicios"}}
            list={[
                "FLT y LTL doméstico y entre México y Estados Unidos y Canadá.",
                "Servicios Puerta a Puerta.",
                "Despacho aduanal para movimientos fronterizos.",
                "Carga seca: Camión Remolque, Remolque articulado",
                "Líquidos, gases y químicos: Tanque",
                "Granel: Estacas Refrigerado (material de construcción) Ferro-Tolva",
                "Maquinaria pesada: Cama baja",
                "Contenedores extra dimensión: Plataforma"
            ]}
        />

        <SectionImage 
            tag="Amplia Experiencia"
            title="Transporte Marítimo"
            paragraph={[
              "De acuerdo a nuestra experiencia, ofrecemos un amplio conocimiento de los más importantes puertos en China, Estados Unidos y México dando como resultado un control adecuado de la documentación y embarque.", 
              "Coordinación de fletes marítimos para carga seca, material peligroso, material frágil, contenedores refrigerados, carga sobredimensionada, etc., amplia variedad de opciones de acuerdo a las necesidades del cliente, ofreciendo servicios consolidados para contenedores marítimos en productos perecederos, líquidos corrosivos, carga seca, maquinaria pesada y sobredimensionada.", 
              "Manejamos variedad de contenedores marítimos, incluyendo contenedores de medidas estándar de 20´y 40’ pies, contenedores de 40’ y 45’ High Cube, contenedores abiertos de 20´y 40´flat rack y contenedores abiertos de 20´y 40‘."
            ]}
            src={<Img fluid={data.maritim.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            // link={{to: "contacto", title: "Contactar ahora"}}
        />

        <SectionImage 
            tag="Logística personalizada"
            title="Transporte Intermodal"
            paragraph={[
              "Servicios combinados de transporte para optimizar y bajar costos en distancias largas, transbordos, consolidación y des consolidación de cargas. Este servicio se ofrece en combinación a los servicios ferroviarios en Estados Unidos y México."
            ]}
            src={<Img fluid={data.intermodal.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            // link={{to: "/servicios", title: "Ver más servicios"}}
            
        />

        <SectionImage 
            tag="Importaciones y Exportaciones"
            title="Despacho Aduanal"
            paragraph={[
              "Contamos con agentes aduanales para realizar todo tipo de trámite aduanal para sus importaciones y exportaciones dentro del territorio nacional, del lado americano EEUU, cruces fronterizos, puertos marítimos, etc."
            ]}
            src={<Img fluid={data.aduanal.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            // link={{to: "contacto", title: "Contactar ahora"}}
        />

      <section className="container pt-5 pb-5 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">Somos la solución confiable para tu carga.</h2>
            <p className="text-center">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p>
            
            <Link to="/contacto" className="btn btn-primary rounded mt-4">Contactanos ahora mismo</Link>
        </div>
      </section>

    </Layout>
  )
}

export default ServicesPage
