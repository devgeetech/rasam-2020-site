import React from 'react'
import { graphql } from "gatsby"
// import Img from "gatsby-image"
import Img from "gatsby-image/withIEPolyfill"

import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/about.module.css'


import jpgBG from '../../content/images/jpg/dance3.jpg'
import webpBG from '../../content/images/webp/dance3.webp'

const about = ({data}) => {
    return(
        <Layout>
            {/* <Img 
                fluid={data.fileName.childImageSharp.fluid}
                objectFit="cover"
                objectPosition="50% 50%" 
                alt="Rasam BG" 
                className={classes.BgIm}/> */}
            {/* <img src={jpgBG} alt="Rasam BG" className={classes.BgIm}/> */}
            <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572350486/rasamImages/dance3_jyawmu.jpg" alt="Rasam BG" className={classes.BgIm}/>
            {/* <div >
                <picture>
                    <img srcset="https://res.cloudinary.com/devgeetech/image/upload/v1572351885/rasamImages/dance3_nsybxq.webp" className={classes.BgIm}/>
                    <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572350486/rasamImages/dance3_jyawmu.jpg" alt="Rasam Image" className={classes.BgIm}/>
                </picture>
            </div> */}

            <div className={classes.grad} />
            <div className={classes.content}>
                <div className={classes.heading}>About</div>
                <div className={classes.thalluText}>
                    <p>Rasam – An ultimate cultural extravaganza where young talents from across the
                        country exhibit their artistic prowess in one daring event. An event which 
                        can create immortal ripples of elegance in the cultural scene of the country.
                        The cultural fest with an irresistible flair where talents are uncovered and 
                        friendships are forged. A fest which promises unforgettable experiences and 
                        glorious spectacles – 
                        The unique days of your life which will be forever embedded in your memory. 
                        Be a part of this carnival of dreams at Providence College of Engineering 
                        on 7th &#38; 8th February, 2020.</p>
                </div>
            </div>
        </Layout>

    )
}

export default about

export const query = graphql`
        query {
            fileName: file(relativePath: { eq: "webp/dance3.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `