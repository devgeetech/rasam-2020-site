import React, { useEffect, useState } from "react";

import { Helmet } from "react-helmet"

import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/index.module.css'
import HeroPCVid from '../../content/vids/rasGli.mp4'
import HeroMobVid from '../../content/vids/rasGliMob.mp4'


// let HeroVid = null;

// function getWindowDimensions() {
//     if (typeof window !== `undefined`){
//         const { innerWidth: width, innerHeight: height } = window;
//         return {
//             width,
//             height
//         };
//     }
//   }
  
// function useWindowDimensions() {
//     const [windowDimensions, setWindowDimensions] = useState(
//       getWindowDimensions()
//     );
  
//     useEffect(() => {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }
  
//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
  
//     return windowDimensions;
// }



const IndexPage = () => {

    // const [HeroVid, setHeroVid] = useState(HeroMobVid);
    
    // useEffect(()=> {
    //     if (typeof window !== `undefined`){
    //         console.log(window.innerWidth)
    //         if(window.innerWidth<1200){
    //             setHeroVid(HeroMobVid);
    //         }else{
    //             setHeroVid(HeroPCVid);
    //         }
    //     }
    // }, [])

//
    return(
        <React.Fragment>
            <Helmet>
                <meta name="viewport" content="width=1000, user-scalable=0" />
                <title>RASAM</title>
            </Helmet>
            <Layout>
                <video className={classes.vid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted">
                    <source src={HeroPCVid} type="video/mp4"/>
                </video>
                <video className={classes.mobVid} width="1920" height="1080" autoPlay="autoPlay" loop muted="muted">
                    <source src={HeroMobVid} type="video/mp4"/>
                </video>               
            </Layout>
        </React.Fragment>

    )
} 

export default IndexPage