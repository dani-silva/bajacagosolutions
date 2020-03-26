import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Top = ({ metaData, en }) => {

    return(
        <div className="border-bottom d-none d-md-block">
            <div className="container">
                <div className="row">
                <div className="col-sm-3 col-md-3 d-flex justify-content-start">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href={metaData.socialMedia.facebook} className="nav-link px-2 py-2" target="_blank" rel="noopener noreferrer" title="Facebook"><i className="mdi mdi-facebook text-primary"> </i></a>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-9 col-md-9 d-flex align-items-center justify-content-end text-primary small">
                    <a href={`tel:${metaData.phone}`} className="text-primary" alt="Telefono"><i className="mdi mdi-phone text-primary"> </i> {metaData.phone} </a>
                    <a href={`mailto:${metaData.email}`} className="text-primary" alt="Email"><i className="mdi mdi-email ml-3 text-primary"> </i> {metaData.email} </a>
                    {
                        en
                        ?
                        <Link to="/" className="text-primary ml-3">Español</Link>
                        :
                        <Link to="/en" className="text-primary ml-3">English</Link>
                    }
                    {/* <Link to="/" className="text-primary ml-3">ES</Link> */}
                </div>
                </div>
            </div>
        </div>
    )
}

Top.propTypes = {
  metaData: PropTypes.object,
}

Top.defaultProps = {
  metaData: {
      facebook: 'https://facebook.com',
      email: 'info@domain.com',
      phone: '012 345 67 89'
  },
}

export default Top
