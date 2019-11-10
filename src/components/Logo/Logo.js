import React from 'react'
import { graphql } from "gatsby"
import Img from "gatsby-image"

import classes from './Logo.module.css'
import rasLogo from '../../../content/logos/rasBNW.png'

const logo = ({data}) => {
    return(
        <div className={classes.Logo}>
            <img src={rasLogo} alt="Rasam logo"/>
            {/* <Img 
                fluid={data.rasLogo.childImageSharp.fluid}
                alt="Rasam BG"/> */}
        </div>
    )
}

export default logo

// export const query = graphql`
//         query {
//             rasLogo: file(relativePath: { eq: "rasBNW.png" }) {
//                 childImageSharp {
//                     fluid(maxWidth: 64) {
//                         ...GatsbyImageSharpFluid
//                     }
//                 }
//             }
//         }
//     `