import React, { useEffect, useState } from "react";

import Layout from '../components/hoc/Layout/Layout'

import classes from '../styles/index.module.css'
import HeroPCVid from '../../content/vids/rasGli.mp4'
import HeroMobVid from '../../content/vids/rasGliMob.mp4'


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
    let HeroVid = null;
    // if (typeof window !== `undefined`){
    //     if(window.innerWidth<1200){
    //         HeroVid=HeroMobVid;
    //     }
    // }

    useEffect(()=>{
        if(window.innerWidth>=1200){
            HeroVid=HeroPCVid;
        }else{
            HeroVid=HeroMobVid;
        }
    })

    // const HeroVid = typeof window !== `undefined` ? window.innerWidth<1200? HeroMobVid : HeroPCVid : null;

    return(
        <Layout>
            <video className={classes.vid} width="1920" height="1080" autoplay="autoplay" loop muted="muted">
                <source src={HeroVid} type="video/mp4"/>
            </video>            
        </Layout>
    )
} 

export default IndexPage