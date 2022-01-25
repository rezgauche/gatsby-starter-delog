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
          <h1 className="post-title">Contact</h1>
          <p>"let's get in touch" &rarr;</p>
        </div>
        <div>
          <form className="form-container" 
            </div>
        <h3 className="post-title">email</h3>
          <p> "mailto:mail@rezgauche.be" &rarr;</p>
          </form>
        </div>
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
