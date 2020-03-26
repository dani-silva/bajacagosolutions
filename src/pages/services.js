import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionImage from "../components/section-image"

const ServicesEnPage = () => {

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

    <Layout en={true}>
        <SEO title="Servicios de logistica" />

        <section className="container pt-5 pb-5 rounded">
            <div className="px-5 d-flex flex-column align-items-center">

                <h1 className="tag pt-5">Baja Cargo Solutions</h1>
                <h2 className="text-dark pb-3 text-center text-center">We provide the following shipping services on a daily basis.</h2>
                <p className="text-center">Baja Cargo Solutions is your solution for Ocean, Intermodal and 3PL Distribution Services.</p>
                {/* <Link to="paginas-web" className="btn btn-primary rounded">Ver los servicios</Link> */}
            </div>
        </section>

        <SectionImage 
            tag="The best shipping method"
            title="Truck freight-Intermodal"
            paragraph={[
              "We have a wide portfolio of commercial partners in ground services for standard requirements or specialized services throughout the United States and Mexico. This allows us to develop strategies customized to the client's needs, offering different cost options according to their requirements and needs.",
              "Always looking for the benefit of our clients, advising on the logistics of their supply chain and foreign deliveries."]}
            src={<Img fluid={data.terrestre.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            // link={{to: "/servicios", title: "Ver más servicios"}}
            list={[
                "FTL (Full Truck Load).",
                "LTL (Less Truck Load).",
                "48'/ 53' equipment.",
                "Load consolidation, Platform, Low Boy, Bobtail and Oversized cargo"
            ]}
        />

        <SectionImage 
            tag="Wide experience"
            title="Ocean Freight"
            paragraph={[
              "According to our experience, we offer extensive knowledge of the most important ports in China, the United States and Mexico, resulting in adequate control of documentation and shipping.", 
              "Coordination of ocean freight for dry cargo, hazardous material, fragile material, refrigerated containers, oversized cargo, etc., wide variety of options according to customer needs, offering consolidated services for ocean containers in perishable products, corrosive liquids, dry cargo. , heavy and oversized machinery.", 
              "We handle a variety of ocean containers, including standard 20 'and 40' feet containers, 40 'and 45' High Cube containers, 20 'and 40' flat rack containers and 20 'and 40' open containers."
            ]}
            src={<Img fluid={data.maritim.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            // link={{to: "contacto", title: "Contactar ahora"}}
            list={[
                "Port to Port services.",
                "Door to Port services.",
                "Customs Filling & Clearance.",
                "Refrigerated Containers.",
                "(FCL) Full Container Load.",
                "(LCL) Less Container Load.",
                "Dry cargo, Perishables, Break Bulk, Loose loads and Oversized cargo.",
                "Incoterms Compliance and Consulting.",
            ]}
        />

        <SectionImage 
            tag="Custom logistics"
            title="Rail freight"
            paragraph={[
              "Combined transportation services to optimize and lower costs over long distances, transfers, consolidation and deconsolidation of loads. This service is offered in combination with rail services in the United States and Mexico."
            ]}
            src={<Img fluid={data.intermodal.childImageSharp.fluid} className="rounded" alt="ubicados estratégicamente" />}
            reverse={true}
            // link={{to: "/servicios", title: "Ver más servicios"}}
            list={[
                "Train + Truck.",
                "Ferro-Mex (Mexican Railroad).",
                "KCS (Kansas City Southern).",
            ]}
        />

        <SectionImage 
            tag="Imports and exports"
            title="Warehousing"
            paragraph={[
              "We have customs agents to carry out all kinds of customs procedures for your imports and exports within the national territory, on the American side of the United States, border crossings, seaports, etc."
            ]}
            src={<Img fluid={data.aduanal.childImageSharp.fluid} className="rounded" alt="exportación e importación" />}
            // link={{to: "contacto", title: "Contactar ahora"}}
            list={[
                "Short term storage.",
                "Over flow handling.",
                "Trans-load service.",
                "Commercial packaging.",
            ]}
        />

      <section className="container pt-5 pb-5 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">We are your reliable cargo solution.</h2>
            <p className="text-center">Contact us if you need more information about our ocean freight shipping services. 
            We proudly ship products, goods, and equipment anywhere in the world.</p>
            
            <Link to="/contact-us" className="btn btn-primary rounded mt-4">Contact now</Link>
        </div>
      </section>

    </Layout>
  )
}

export default ServicesEnPage
