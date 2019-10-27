import React from "react"

import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/index.module.css'
import HeroVideo from '../../content/vids/rasGli.mp4'
import HeroMobVid from '../../content/vids/rasGliMob.mp4'


const IndexPage = () => {
    return(
        <Layout>
            <video className={classes.vid} width="1920" height="1080" autoplay="autoplay" loop muted="muted">
                <source src={HeroVideo} type="video/mp4" media="screen and (min-width: 1200px)"/>
                <source src={HeroMobVid} type="video/mp4" media="handheld and (min-width: 320px)"/>
            </video>            
        </Layout>
    )
} 

export default IndexPage