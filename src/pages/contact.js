import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('https://arweave.net/dn6z-GqVMI3psbX_EM4SsyeMENyI_MCTcaweuP61pR0')`, marginBottom: 0}}>
          <h1 className="post-title">Get in Touch</h1>
          <p>"let's get in touch" &rarr;</p>
        </div>
            <p>
            mail@rezgauche.be
            <br>
            +32 488 367 723
            <br>
            Theodore Verhaegenstraat 154, Brussels 1060, Belgium
            <br>
            administration
            smartbe.be, Verenigde Producties vzw, activiteit nr. 06349
            <br>
            transdisciplinary art foundation, project rezgauche
            <br>
            V.A.T. BE 0896.755.397
            <br>
            opencollective.com/rezgauche
            </p>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
