import React from "react"
import { Link, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import Img from 'gatsby-image'

const Header = ({ siteTitle, nav, action }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [open, setOpen] =  React.useState(false)

  console.log("nav status", open)

  return(
    <header className="bg-white sticky-top border-bottom">
      <div className="container d-flex align-items-center justify-content-between">
        <Link className="d-flex align-items-center" to="/">
          <Img fixed={data.file.childImageSharp.fixed} className="mr-2" alt="" />
          <h3 className="h5 text-primary font-weight-bold mb-0">BAJA CARGO <br /> SOLUTIONS</h3>
        </Link>
        <nav className={`nav-responsive d-flex flex-row align-items-center ml-auto d-md-block ${open ? "d-sm-block" : "d-sm-none"}`}>
          <button className="btn btn-light rounded ml-auto m-2 d-md-none d-sm-block" onClick={() => setOpen(false)}><i className="mdi mdi-window-close"> </i></button> 
          <ul className="nav">
          {
            nav.map((link, i) => {
              return(
                <li key={i} className="nav-item">
                  <Link to={link.to} activeClassName="text-primary" className="nav-link py-4">{link.link}</Link>
                </li>
              )
            })
          }
          </ul>
        </nav>
        
        <span className={`bg-close d-md-none d-sm-none ${open ? "d-sm-block" : ""}`}  onClick={() => setOpen(false)}></span>
        <button className="btn btn-light rounded ml-auto my-3 d-md-none d-sm-block" onClick={() => setOpen(true)}><i className="mdi mdi-menu"> </i></button> 
        {
          action
          ?
            <Link to={action.to} className="btn btn-primary ml-3 rounded text-white">
              {action.link}
            </Link>
          : null
        }
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
  nav: PropTypes.array,
  action: PropTypes.object
}

Header.defaultProps = {
  siteTitle: ``,
  nav: [
    {to: '/', link: 'Link'}
  ]
}

export default Header
