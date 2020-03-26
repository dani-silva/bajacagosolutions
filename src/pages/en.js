import React from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import SectionImage from "../components/section-image"

const EnglishPage = () => {

  const data = useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      maritimo: file(relativePath: { eq: "services/maritim.jpg" }) {
        childImageSharp {
          fluid(quality: 75) {
              ...GatsbyImageSharpFluid
          }
        }
      }
      trailer: file(relativePath: { eq: "services/trailer.jpg" }) {
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
      <SEO title="Customized logistics in Baja California" />

      <Carousel en={true} />

      <SectionImage 
        tag="Exports and imports"
        title="Baja Cargo Solutions"
        paragraph={["Moving cargo via ocean vessel is a timeless tradition that has evolved into the main transportation mode of global trade. Baja Cargo Solutions offers tailor made ocean freight and Intermodal services based on your shipment needs. Upon receiving your shipment information, we determine the best shipping method to meet your goals."]}
        src={<Img fluid={data.about.childImageSharp.fluid} className="rounded" alt="Exportaciones e importaciones" />}
        link={{to: "about-us", title: "Read More"}}
      />

      <section className="container py-5 my-5 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
          <h2 className="text-dark pb-3 text-center text-center">We provide the following shipping services on a daily basis</h2>
          <p className="text-center">Dedicated to giving a personalized treatment, fulfilling in time and form the requirements of our clients.</p>
          <Link to="/services" className="btn btn-primary rounded">Read more</Link>
        </div>
      </section>

      <section className="container pb-5">
        <div className="row">
          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start">
            <div className="row px-3">
              <Img fluid={data.trailer.childImageSharp.fluid} className="w-100 rounded" alt="Transporte terrestre" />
              <div className="py-4 mb-4 mb-4">
                <h4 className="text-dark pb-3">Truck freight-Intermodal</h4>
                <p className="pb-3">We have a wide portfolio of commercial partners in ground services for standard requirements or specialized services throughout the United States and Mexico.</p>
              </div>
            </div>
            <div className="row px-3">
              <Img fluid={data.intermodal.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Rail freight</h4>
                <p>Combined transportation services to optimize and lower costs over long distances, transfers, consolidation and deconsolidation of loads.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 d-flex flex-column align-items-start">
            <div className="row px-3">
              <Img fluid={data.maritimo.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Ocean Freight </h4>
                <p>According to our experience, we offer extensive knowledge of the most important ports in China, the United States and Mexico, resulting in adequate control of documentation and shipping.</p>
                <div className="row">
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Door to Port services</h5>
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Port to Port services</h5>
                  </div>
                  <div className="row">
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Customs Filling & Clearance</h5>
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> Refrigerated Containers</h5>
                  </div>
                  <div className="row">
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> (FCL) Full Container Load </h5>
                    <h5 className="col-md-12 h6 pt-2"><i className="mdi mdi-menu-right text-primary"> </i> (LCL) Less Container Load</h5>
                  </div>
              </div>
            </div>
            <div className="row px-3">
              <Img fluid={data.aduanal.childImageSharp.fluid} className="w-100 rounded" alt="Páwgina web" />
              <div className="py-4 mb-4">
                <h4 className="text-dark pb-3">Warehousing</h4>
                <p>We have customs agents to carry out all kinds of customs procedures for your imports and exports within the national territory, on the American side of the United States, border crossings, seaports, etc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default EnglishPage
