import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ metaData }) => (
    <footer className="bg-white border-top">
      <div className="container">
        <div className="row py-5">
          <div className="col-sm-12 col-lg-4 mb-4">
              <h4 className="text-black mb-3">{metaData.title}</h4>
              <p className="text-black">Logística a tiempo y sin problemas para tus cargas, fletes o movimientos de Exportación e Importación en México.</p>
          </div>
          <div className="col-sm-4 col-lg-2">
            <h6 className="text-dark pb-4">Dirección</h6>
            <p className="small">Calle Atoyac 375 No.10, Col. Villa Bonita, Ensenada, BC. 22852</p>
          </div>
          <div className="col-sm-4 col-lg-3">
            <h6 className="text-dark pb-4">Horario</h6>
            <ul className="small">
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Lunes a viernes: 8am - 6pm</li>
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Sábado: 9am - 1pm</li>
            </ul>
          </div>
          <div className="col-sm-4 col-lg-3">
            <h6 className="text-dark pb-4">Telefonos</h6>
            <ul className="small">
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Fijo: (646) 978 5965</li>
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Movil MEX: (646) 207 0886</li>
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Teléfono Movil EEUU: (909) 904 9064</li>
              <li className="mb-2"><i className="mdi mdi-chevron-right pr-1"></i>Email: info@bajacargosolutions.com</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex align-items-center text-white small">
              <span className="brand">© {new Date().getFullYear()} {metaData.title} </span>
            </div>
            <div className="col-sm-6 d-flex justify-content-md-end justify-content-sm-center">
              <ul className="nav">
               <li className="nav-item">
                  <a href="https://facebook.com/" className="nav-link py-3" target="_blank" rel="noopener noreferrer" title="WeChat"><i className="mdi mdi-wechat text-white"> </i></a>
                </li>
                <li className="nav-item">
                  <a href="https://facebook.com/" className="nav-link py-3" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="mdi mdi-facebook text-white"> </i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
)

Footer.propTypes = {
  metaData: PropTypes.object,
}

Footer.defaultProps = {
  metaData: ``,
}

export default Footer
