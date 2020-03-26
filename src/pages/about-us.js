import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionImage from "../components/section-image"

const AboutEnPage = () => {

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

    <Layout en={true}>
        <SEO title="Reliable Ocean Freight Shipping" />
        
        <section className="container py-5 pulse animated">
            <Img fluid={data.hero.childImageSharp.fluid} className="rounded" alt="Shipping" />
        </section>

        <section className="container pt-5 pb-5 rounded">
            <div className="px-5 d-flex flex-column align-items-center">

                <h1 className="tag">Baja Cargo Solutions</h1>
                <h2 className="text-dark pb-3 text-center text-center">Reliable Ocean Freight Shipping</h2>
                <p className="text-center">Baja Cargo Solutions is your solution for Ocean, Intermodal and 3PL Distribution Services.</p>
                {/* <Link to="paginas-web" className="btn btn-primary rounded">Ver los servicios</Link> */}
            </div>
        </section>

        <SectionImage 
            tag="The best shipping method"
            title="Baja Cargo Solutions"
            paragraph={["Moving cargo via ocean vessel is a timeless tradition that has evolved into the main transportation mode of global trade. Baja Cargo Solutions offers tailor made ocean freight and Intermodal services based on your shipment needs. Upon receiving your shipment information, we determine the best shipping method to meet your goals."]}
            src={<Img fluid={data.about.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            link={{to: "/services", title: "Read more"}}
        />

        <SectionImage 
            tag="Logistics service provider."
            title="Exportación e importación"
            paragraph={["Baja Cargo Solutions formed in 2014 as a Logistics service provider. Hands-on experience and in-depth knowledge gained from operating the vast range of logistics. Our office works closely with leading carriers in order to provide our customers with the best pricing and equipment availability. We are focused to be your long term logistics outsourcing partner."]}
            src={<Img fluid={data.maritim.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            link={{to: "/contact-us", title: "Contact us"}}
            // list={[
            //     "FLT y LTL doméstico y entre México y Estados Unidos y Canadá.",
            //     "Servicios Puerta a Puerta.",
            //     "Carga seca: Camión Remolque, Remolque articulado",
            //     "Maquinaria pesada: Cama baja"
            // ]}
        />

      <section className="container pt-5 pb-4 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">We are your reliable cargo solution!</h2>
            <p className="text-center">Logistics on time and without problems for your loads, freight or movements of Export and Import in Mexico.</p>
        </div>
      </section>

      <section className="container py-5">
        <div className="row">
          <div className="col-md-6 col-sm-12 pb-5">
            <div className="pb-5">
                <h5 className="text-dark pb-2">Truck freight-Intermodal</h5>
                <p>Always looking for the benefit of our clients, advising on the logistics of their supply chain and foreign deliveries.</p>
            </div>
            <div className="pb-5">
                <h5 className="text-dark pb-2">Ocean Freight</h5>
                <p>Coordination of ocean freight for dry cargo, hazardous material, fragile material, refrigerated containers, oversized cargo, etc.</p>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 pb-5">
            <div className="pb-5">
                <h5 className="text-dark pb-2">Rail freight</h5>
                <p>Combined transportation services to accelerate and reduce costs on long distances, transfers, consolidation and deconsolidation of loads.</p>
            </div>
            <div className="pb-5">
                <h5 className="text-dark pb-2">Warehousing</h5>
                <p>We have customs agents to carry out all kinds of customs procedures for your imports and exports.</p>
            </div>
          </div>
          <div className="col pb-5 d-flex justify-content-center">
            <Link to="/services" className="btn btn-primary rounded">Services</Link>
          </div>
        </div>

      </section>

    </Layout>
  )
}

export default AboutEnPage
