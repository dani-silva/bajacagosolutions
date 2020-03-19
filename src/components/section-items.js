import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Section = ({content}) => {
    console.log(content)
    return(
        <section className="container pt-5">
            <div className="row">
                {
                    content.map((item, i) => {
                        return (
                            <div key={i} className="col-lg-4 col-md-6 d-flex flex-column justify-content-start align-items-start pb-5">
                                <h6 className="tag">{item.tag}</h6>
                                <h4 className="text-dark pb-3">{item.title}</h4>
                                <p>{item.paragraph}</p>
                                <Link to={item.link} className="btn px-0">Go to page 2</Link>
                            </div>
                        )
                    })
                }
                {/* <div className="col d-flex flex-column justify-content-center">
                    <span className="tag">{tag}</span>
                    <h3 className="text-dark pb-3">{title}</h3>
                    <p>{paragraph}</p>
                    <Link to={link}>Go to page 2</Link>
                </div>
                <div className="col d-flex flex-column justify-content-center">
                    <span className="tag">{tag}</span>
                    <h3 className="text-dark pb-3">{title}</h3>
                    <p>{paragraph}</p>
                    <Link to={link}>Go to page 2</Link>
                </div> */}
            </div>
        </section>
    )
}

Section.propTypes = {
    content: PropTypes.array
}
  
Section.defaultProps = {
    content: [{
        tag: "Etiqueta",
        title: "Titulo",
        paragraph: "Parrafo",
        link: "/"
    }]
}

export default Section
