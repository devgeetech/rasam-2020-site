import React from 'react'


import Layout from '../components/hoc/Layout/Layout'
import classes from '../styles/contact.module.css'

import jpgBG from '../../content/images/jpg/vibe1.jpg'
import webpBG from '../../content/images/webp/vibe1.webp'

import locpin from '../../content/icons/locpinEd.svg'
import mail from '../../content/icons/mailEd.svg'
import fb from '../../content/icons/fbEd.svg'
import insta from '../../content/icons/instaEd.svg'
import twitter from '../../content/icons/twitterEd.svg'
import youtube from '../../content/icons/youtubeEd.svg'
import linkedin from '../../content/icons/linkedinEd.svg'
import call from '../../content/icons/callEd.svg'


const contact = () => {
    return(
        <Layout>
            {/* <img src={jpgBG} alt="Rasam BG" className={classes.BgIm}/> */}
            <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572350485/rasamImages/vibe1_ibwiux.jpg" alt="Rasam BG" className={classes.BgIm}/>
            <div className={classes.grad} />
            <div className={classes.content}>
                    <div className={classes.heading}>Contact Us</div>
                    <div className={classes.thalluText}>
                        <p className={classes.thalluMessage}>Hey there! got questions? Shoot.</p>
                        <div className={classes.contDets}>
                            <div className={classes.contDet}>
                                <img src={mail} alt="Mail icon" className={classes.svgIc}/>
                                <a href="mailto:info@providence.edu.in">info@providence.edu.in</a>
                            </div>
                            <div className={classes.contDet}>
                                <img src={locpin} alt="locpin" className={classes.svgIc}/>
                                <a href="https://g.page/TheProvidenceCollege?share">Providence College of Engineering,
                                 Angadical South, Chengannur</a>
                            </div>


                            <div className={classes.contDetCor}>
                                {/* <img src={mail} alt="Mail icon" className={classes.svgIc}/> */}
                                <p className={classes.contDetCorHead}>Rasam Co-ordinator</p>
                                <p>Jobin Joy</p>
                                <div className={classes.contDet}>
                                    <a href="mailto:jobin.j@providence.edu.in">
                                        <img src={mail} alt="Mail icon" className={classes.svgIcS}/>
                                    </a>
                                    <a href="tel:+919947374969">
                                        <img src={call} alt="Call icon" className={classes.svgIcS}/>
                                    </a>
                                </div>
                            </div>


                            <div className={classes.contDet}>
                                <a href="http://facebook.com/theprovidencecollege">
                                    <img src={fb} alt="locpin" className={classes.svgIc}/>
                                </a>
                                <a href="http://twitter.com/providencece">
                                    <img src={twitter} alt="locpin" className={classes.svgIc}/>
                                </a>
                                <a href="http://instagram.com/providencece">
                                    <img src={insta} alt="locpin" className={classes.svgIc}/>
                                </a>
                                <a href="http://prvdnc.com/youtube">
                                    <img src={youtube} alt="locpin" className={classes.svgIc}/>
                                </a>
                                <a href="http://prvdnc.com/linkedin">
                                    <img src={linkedin} alt="locpin" className={classes.svgIc}/>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
        </Layout>

    )
}

export default contact
