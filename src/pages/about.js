import React from 'react'

import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/about.module.css'

const about = () => {
    return(
        <Layout>
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
