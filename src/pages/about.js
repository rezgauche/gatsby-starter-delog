import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>about</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5"}}>
    
        <p> rezgauche.be is innovating, developing and practising inclusive structures that balance responsibility, resources and stakeholdership, with participation and decentralised forms of organisation.</p>
        <p> Our gallery/atelier location is at Rue Theodore Verhaegen 154, Brussels, Belgium. The multi-purpose gallery/atelier is open for performance art, dance, artistic research, visual art, theatre, design, music production, audiovisual production and other forms of presenting and gathering around artistic practice.</p> 
       
          <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('https://arweave.net/dn6z-GqVMI3psbX_EM4SsyeMENyI_MCTcaweuP61pR0')`, marginBottom: 0}}>
          <h1 className="post-title">Contact</h1>
          <p> mail@rezgauche.be &rarr;</p>
          <p> +32 488 367 723 &rarr; Theodore Verhaegenstraat 154, Brussels 1060, Belgium &rarr; 
            administration: smartbe.be, Verenigde Producties vzw, activiteit nr. 06349 transdisciplinary art foundation, project rezgauche V.A.T. BE 0896.755.397 &rarr;
            opencollective.com/rezgauche </p>
        </div>
        
      <p>  rezgauche.be* initiates a transition from a curated art gallery into a decentralised organisation. </p>
    <p> For its realisation rezgauche.be follows a fourfold path: 1) Start a cooperative practice to fund and share responsibility.
    2) Make a DAO for governance by the participants. 3) Work with a Smartbe Activity for durable artistic employment.
    4) Develop the gallery/atelier through Web3. </p>
    
    <p> rezgauche.be*\_openly accounts for developing its: location, employment, materials. 
      starting phase estimated annual location costs: 8646 €   
        development phase estimated total annual costs: 119 314 € </p>
      </div>
    </Layout>
  )
}

export default notFound
