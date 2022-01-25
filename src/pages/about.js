import React from "react"
import Helmet from 'react-helmet';
import Layout from "../components/layout"
import { Link } from "gatsby";

const notFound = () => {
  return (
    <Layout>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <div style={{textAlign: "center", padding:"5vh 0", lineHeight: "1.5"}}>
    
        <p> rezgauche.be is innovating, developing and practising inclusive structures that balance responsibility, resources and stakeholdership, with participation and decentralised forms of organisation.</p>
        <p> Our gallery/atelier location is at Rue Theodore Verhaegen 154, Brussels, Belgium. The multi-purpose gallery/atelier is open for performance art, dance, artistic research, visual art, theatre, design, music production, audiovisual production and other forms of presenting and gathering around artistic practice. 
       rezgauche.be* initiates a transition from a curated art gallery into a decentralised organisation.
    For its realisation rezgauche.be follows a fourfold path
    Work with a Smartbe Activity for durable artistic employment.
    Start a cooperative practice to fund and share responsibility.
    Make a DAO for governance by the participants.
    Develop the gallery/atelier through Web3.
    \n\n*rezgauche.be*\_openly accounts for developing its: location, employment, materials.\n\n*   
      starting phase estimated *annual location costs: 8646 €   
        development phase estimated total annual costs: 119 314 € </p>
   <h3>roadmap</h3>
   <p>
      ### 2020

      *   11
          initial idea and desire for this experiment. [*read article*](/posts/debunking/)

      <!---->

      *   12
          proposal for creating a sustainable economy for artist ecosystem. [*read article*](/posts/creating-a-sustainable-economy-for-the-artists-eco-system/)

      ### 2021

      *   1 - 4

          *   build and launch website version 1.0

          *   prepare AK exposition

          *   prepare Motion workshop

      <!---->

      *   5 - 7

          *   AK exposition

          *   Motion [*workshop*](https://www.youtube.com/watch?v=XJnV41LQ7\_w)

          *   Launch *open call*

      <!---->

      *   8 - 9

          *   MotionDAO [*research*](https://www.dance-tech.net/profiles/blogs/crypto-in-motion-a-crypto-economy-for-dance-tech-creators)

      <!---->

      *   10 - 11

          *   build website version 2.0

          *   test case smart contract A.i.R

      <!---->

      *   12

          *   launch website 2.0

          *   cooperative stakeholders business plan A.i.R

          *   contact partners

      ### 2022

      *   1 - 6

          *   apply for/gather funds for starting phase

          *   initiate seed funding round 1: founders

          *   residencies, activities and events

          *   beta phase smart contract

      <!---->

      *   7 - 8

          *   compile year planning 2023

          *   develop website version 3.0

      <!---->

      *   9 - 12

          *   seed funding round 2: investors

          *   residencies, activities and events

          *   apply for funding development phase

      ### 2023

      *   1 - 2

          *   extend into global networks

          *   define public foundation (art, disparity, ecology)

      *   2 - 6

          *   residencies, activities and events

          *   apply for EU funding Employment, A.i.R. and Activities

          *   develop economy of solidarity

      *   7 - 8

          *   compile year planning 2024

          *   apply for funding economy of solidarity

          *   develop public foundation

      *   9 - 12

          *   launch website 3.0

          *   alpha phase smart contract

          *   residencies, activities and events

          *   seed funding round 3: economy of solidarity

          *   strategic real estate & ecological development

      ### 2024

      *   1 - 6

          *   launch public foundation

          *   residencies, activities and events

      *   7 - 8

          *   evaluation of 2020-2024 four year plan

          *   compile year planning 2025

      *   9 - 12

          *   develop next roadmap
          
          
          <Link to="/">home</Link> safely</p>
          
          
      </div>
    </Layout>
  )
}

export default notFound
