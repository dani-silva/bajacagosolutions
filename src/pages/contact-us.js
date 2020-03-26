import React from "react"

import { Link, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactEnPage = () => {
  const data = useStaticQuery(graphql`
      query {
          wechat: file(relativePath: { eq: "wechat.png" }) {
              childImageSharp {
                  fluid(quality: 75) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }
  `)

  const [isErrorForm, setErrorForm] = React.useState(false)
  const [isSubmit, setIsSubmit] = React.useState(false)
  const [isResponse, setResponse] = React.useState("")

  const validateForm = (e) => {
    e.preventDefault()
    
    const data = e.target
    
    console.log('Formato datos', new FormData(data))
    
    if(data.name.value && data.email.value && data.message.value ){
      setIsSubmit(true)
      fetch(
        "/contact.php",
        {
          method: "POST",
          body: JSON.stringify({
            name: data.name.value,
            company: data.company.value,
            email: data.email.value,
            phone: data.phone.value,
            subject: data.subject.value,
            message: data.message.value,
          }),
          header: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then(res => {
        console.log('Respuesta', res)
        return res.json()
      })
      .then( response => {
        console.log('Text response', response)
        setResponse(response)
        setIsSubmit(false)

      })
      .catch(err => {
        console.log("error", err)
        setIsSubmit(false)
      })

    } else {

      setErrorForm(true)
    }
  }

  return(

    <Layout en={true}>
        <SEO title="Contact us" />

        <section className="container pt-5 rounded">
          <div className="px-5 py-5 d-flex flex-column align-items-center">

              <h1 className="h3">Baja Cargo Solutions</h1>
              <p className="text-center">We are here to help you. Request your quote today!</p>
          </div>
        </section>

        <section className="container my-5">
          <iframe className="border rounded pulse animated" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2622499915515!2d-116.57212868530078!3d31.8450782382233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88fca1ebabc85%3A0x2bb76bb76c87361a!2sINFOTEK!5e0!3m2!1ses!2smx!4v1584594490932!5m2!1ses!2smx" width="100%" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>
        </section>

        <section className="container pt-5">
          <h3>We are your reliable cargo solution</h3>
          <p>Contact us if you need more information about our ocean freight shipping services. 
            We proudly ship products, goods, and equipment anywhere in the world.</p>
          <div className="row py-5">
            <form 
              className={`col-md-7 m-1 m-md-0 border py-4 mb-5 rounded bg-white ${isErrorForm ? "was-validated" : ""}`} 
              // method="POST" 
              // action="http://bajacargosolutions.com/contact.php"
              onSubmit={(e) => validateForm(e)}
            >
              <div className="form-row">
                <div className="form-group mb-4 col-md-6">
                  <label htmlFor="name"> *Contact Name</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Name" required/>
                  <div className="valid-feedback">
                    Good
                  </div>
                  <div className="invalid-feedback">
                    Required field.
                  </div>
                </div>
                <div className="form-group mb-4 col-md-6">
                  <label htmlFor="company">Company</label>
                  <input type="text" className="form-control" name="company" id="company" placeholder="Company" />
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email">*Correo de Contacto</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" required />
                <div className="valid-feedback">
                  Good
                </div>
                <div className="invalid-feedback">
                  Required field.
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="phone">*Telefono de Contacto</label>
                <input type="text" className="form-control" name="phone" id="phone" placeholder="(000) 000 0000" required />
                  <div className="valid-feedback">
                    Good
                  </div>
                  <div className="invalid-feedback">
                    Required field.
                  </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="subject">*Subject</label>
                <select name="subject" id="subject" className="form-control" required>
                  <option defaultValue>More Information</option>
                  <option>Quote</option>
                  <option>Schedule appointment</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <div className="mb-3">
                  <label htmlFor="message">*Message</label>
                  <textarea className="form-control" name="message" id="message" placeholder="Message..." rows="7" required></textarea>
                  <div className="valid-feedback">
                    Good
                  </div>
                  <div className="invalid-feedback">
                    Required field.
                  </div>
                </div>
              </div>
                
              <div className="form-group mb-4 py-3">
                <div className="form-check">
                  <input className="form-check-input custom-control-input" type="checkbox" id="check" required />
                  <label className="form-check-label custom-control-label" htmlFor="check" >
                    I accept <Link to="terms">Térms & Conditions</Link>
                  </label>
                  <div className="valid-feedback">
                    Good
                  </div>
                  <div className="invalid-feedback">
                    Required field
                  </div>
                </div>
              </div>
              {
                isResponse != ''
                ?
                <div className="alert alert-success">{isResponse}</div>
                :
                null
              }
              {
                isSubmit
                ?
                <button className="btn btn-primary" type="submit" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Sending...
                </button>
                :
                <button type="submit" className="btn btn-primary">Send now</button>
              }
            </form>
            
            <div className="col"></div>

            <div className="col-md-4">
              <h6 className="text-dark pb-2">Address</h6>
              <p className="small pb-4">Calle Atoyac 375 No.10, Col. Villa Bonita, Ensenada, BC. 22852</p>
            
              <h6 className="text-dark pb-2">Schedule</h6>
              <ul className="small pb-4">
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Monday to Friday: 8am - 6pm</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Saturday: 9am - 1pm</li>
              </ul>
         
              <h6 className="text-dark pb-2">Phones</h6>
              <ul className="small pb-4">
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Phone: (646) 978 5965</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Mobil MEX: (646) 207 0886</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Mobil EEUU: (909) 904 9064</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Email: info@bajacargosolutions.com</li>
              </ul>

              <h6 className="text-dark pb-2">WeChat</h6>
              <Img fluid={data.wechat.childImageSharp.fluid} className="d-block" /> 
            </div>
          </div>

        </section>

      <section className="container pt-5 pb-4 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">We provide the following shipping services on a daily basis.</h2>
            {/* <p className="text-center">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p> */}
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

export default ContactEnPage
