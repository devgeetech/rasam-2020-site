import React, { useState } from "react";

import { Helmet } from "react-helmet"

import Layout from '../components/hoc/Layout/Layout'
import Spinner from '../components/UI/Spinner/Spinner'

import classes from '../styles/index.module.css'
import HeroPCVid from '../../content/vids/rasGli.mp4'
import HeroMobVid from '../../content/vids/rasGliMob.mp4'
import HeroPCVidWebM from '../../content/vids/rasGli.webm'
import HeroMobVidWebM from '../../content/vids/rasGliMob.webm'


const IndexPage = () => {

    // const [isLoading, toggleLoad] = useState(true);

    // const disp = isLoading ? null : <Spinner/>;

    // console.log(disp)

    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
                <title>RASAM</title>
            </Helmet>
            <Layout>
                {/* {disp} */}
                <video className={classes.vid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted" >
                    <source src={HeroPCVidWebM} type="video/webm"/>
                    <source src={HeroPCVid} type="video/mp4"/>
                    {/* <source src="https://res.cloudinary.com/devgeetech/video/upload/v1572348265/rasam/rasGli_uvmds2.webm" type="video/webm"/>
                    <source src="https://res.cloudinary.com/devgeetech/video/upload/v1572348265/rasam/rasGli_uvmds2.mp4" type="video/mp4"/> */}
                </video>
                <video className={classes.mobVid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted">
                    <source src={HeroMobVidWebM} type="video/webm"/>
                    <source src={HeroMobVid} type="video/mp4"/>
                    {/* <source src="https://res.cloudinary.com/devgeetech/video/upload/v1572362690/rasam/rasGliMob_j0ot7p.webm" type="video/webm"/>
                    <source src="https://res.cloudinary.com/devgeetech/video/upload/v1572362690/rasam/rasGliMob_j0ot7p.mp4" type="video/mp4"/> */}
                </video>             
            </Layout>
        </React.Fragment>

    )
} 

export default IndexPage
