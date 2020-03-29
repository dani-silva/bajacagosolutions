import React from "react"

import { Link, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => {
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
  const [isResponse, setResponse] = React.useState({status: "empty", message: ""})

  const validateForm = (e) => {
    e.preventDefault()
    
    const data = e.target

    if(data.name.value && data.email.value && data.message.value ){
      setIsSubmit(true)
      fetch(
        "/contact.php",
        {
          method: "POST",
          body: new FormData(data),
          header: {
            'Content-Type': 'multipart/form-data'
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

    <Layout>
        <SEO title="Ubicación estratégica" />

        <section className="container pt-5 rounded">
          <div className="px-5 py-5 d-flex flex-column align-items-center">

              <h1 className="h3">Baja Cargo Solutions</h1>
              <p className="text-center">Dedicados a dar un trato personalizado para las cargas, fletes o movimientos de Exportación e Importación en México, cumpliendo en tiempo y forma los requerimientos de nuestros clientes.</p>
          </div>
        </section>

        <section className="container my-5">
          <iframe className="border rounded pulse animated" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.2622499915515!2d-116.57212868530078!3d31.8450782382233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d88fca1ebabc85%3A0x2bb76bb76c87361a!2sINFOTEK!5e0!3m2!1ses!2smx!4v1584594490932!5m2!1ses!2smx" width="100%" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false"></iframe>
        </section>

        <section className="container pt-5">
          <h3>Logística personalizada a tus necesidades.</h3>
          <p>Cotiza en línea o directamente con uno de nuestros operadores vía telefónica o si gustas escríbenos un mensaje en el formulario y te atenderemos a la brevedad, estamos para ayudarte.</p>
          <div className="row py-5">
            <form 
              className={`col-md-7 m-1 m-md-0 border py-4 mb-5 rounded bg-white ${isErrorForm ? "was-validated" : ""}`} 
              // method="POST" 
              // action="http://bajacargosolutions.com/contact.php"
              onSubmit={(e) => validateForm(e)}
            >
              <div className="form-row">
                <div className="form-group mb-4 col-md-6">
                  <label htmlFor="name"> *Nombre de Contacto</label>
                  <input type="text" className="form-control" name="name" id="name" placeholder="Nombre" required/>
                  <div className="valid-feedback">
                    Campo validado
                  </div>
                  <div className="invalid-feedback">
                    Campo requerido, porfavor ingrese la información correcta.
                  </div>
                </div>
                <div className="form-group mb-4 col-md-6">
                  <label htmlFor="company">Nombre de la Empresa</label>
                  <input type="text" className="form-control" name="company" id="company" placeholder="Compañia MX" />
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email">*Correo de Contacto</label>
                <input type="email" className="form-control" name="email" id="email" placeholder="nombre@compañia.com" required />
                <div className="valid-feedback">
                  Campo validado
                </div>
                <div className="invalid-feedback">
                  Campo requerido, porfavor ingrese la información correcta.
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="phone">*Telefono de Contacto</label>
                <input type="text" className="form-control" name="phone" id="phone" placeholder="(000) 000 0000" required />
                  <div className="valid-feedback">
                    Campo validado
                  </div>
                  <div className="invalid-feedback">
                    Campo requerido, porfavor ingrese la información correcta.
                  </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="subject">*Asunto del Mensaje</label>
                <select name="subject" id="subject" className="form-control" required>
                  <option defaultValue>Más Información</option>
                  <option>Cotización</option>
                  <option>Agendar Cita</option>
                </select>
              </div>

              <div className="form-group mb-4">
                <div className="mb-3">
                  <label htmlFor="message">*Mensaje</label>
                  <textarea className="form-control" name="message" id="message" placeholder="Ingrese aqui tu mensaje..." rows="7" required></textarea>
                  <div className="valid-feedback">
                    Campo validado
                  </div>
                  <div className="invalid-feedback">
                    Campo requerido, porfavor ingrese la información correcta.
                  </div>
                </div>
              </div>
                
              <div className="form-group mb-4 py-3">
                <div className="form-check">
                  <input className="form-check-input custom-control-input" type="checkbox" id="check" required />
                  <label className="form-check-label custom-control-label" htmlFor="check" >
                    Acepto <Link to="terms">Términos y Condiciones</Link>
                  </label>
                  <div className="valid-feedback">
                    Campo validado
                  </div>
                  <div className="invalid-feedback">
                    Campo requerido, porfavor acepte los términos y condiciones.
                  </div>
                </div>
              </div>
              {
                isResponse.status != 'empty'
                ? <div className={`alert ${isResponse.status == 'success' ? "alert-warning" : "alert-success"}`}>{isResponse.message}</div>
                : null
              }
              {
                isSubmit
                ?
                <button className="btn btn-primary" type="submit" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Enviando...
                </button>
                :
                <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
              }
            </form>
            
            <div className="col"></div>

            <div className="col-md-4">
              <h6 className="text-dark pb-2">Dirección</h6>
              <p className="small pb-4">Calle Atoyac 375 No.10, Col. Villa Bonita, Ensenada, BC. 22852</p>
            
              <h6 className="text-dark pb-2">Horario</h6>
              <ul className="small pb-4">
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Lunes a viernes: 8am - 6pm</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Sábado: 9am - 1pm</li>
              </ul>
         
              <h6 className="text-dark pb-2">Telefonos</h6>
              <ul className="small pb-4">
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Fijo: (646) 978 5965</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Movil MEX: (646) 207 0886</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Movil EEUU: (909) 904 9064</li>
                <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Email: info@bajacargosolutions.com</li>
              </ul>

              <h6 className="text-dark pb-2">WeChat</h6>
              <Img fluid={data.wechat.childImageSharp.fluid} className="d-block" /> 
            </div>
          </div>

        </section>

      <section className="container pt-5 pb-4 rounded">
        <div className="px-5 d-flex flex-column align-items-center">
            <h2 className="text-dark pb-3 text-center text-center">Somos la solución confiable para tu carga.</h2>
            {/* <p className="text-center">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p> */}
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
            <Link to="/nosotros" className="btn btn-primary rounded">Conocenos</Link>
          </div>
        </div>

      </section>

    </Layout>
  )
}

export default ContactPage
