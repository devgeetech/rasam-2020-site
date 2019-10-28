// import React from 'react';
// import { Fade } from 'react-slideshow-image';

// // import Image from 'react-image-webp';

// import { isWebpSupported } from 'react-image-webp/dist/utils';

// import image1 from '../../../../content/images/webp/jobk.webp'
// import image2 from '../../../../content/images/webp/bush.webp'
// import image3 from '../../../../content/images/webp/dance3.webp'


// let fadeImages = [
//     '../../../../content/images/webp/bush.webp',
//     '../../../../content/images/webp/dance3.webp',
//     '../../../../content/images/webp/jobk.webp'
// ];

// {isWebpSupported() ? fadeImages = [
//     '../../../../content/images/webp/bush.webp',
//     '../../../../content/images/webp/dance3.webp',
//     '../../../../content/images/webp/jobk.webp'
// ] : fadeImages = [
//     '../../../../content/images/jpg/bush.JPG',
//     '../../../../content/images/jpg/dance3.JPG',
//     '../../../../content/images/jpg/jobk.JPG'
// ]}
 

 
// const fadeProperties = {
//     duration: 5000,
//     transitionDuration: 500,
//     infinite: false,
//     indicators: true,
//     onChange: (oldIndex, newIndex) => {
//       console.log(`fade transition from ${oldIndex} to ${newIndex}`);
//     }
//   }
   
//   const Slideshow = () => {
//     return (
//       <div className="slide-container">
//         <Fade {...fadeProperties}>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={image1} alt="Rasam 1" />
//             </div>
//             <h2>First Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={image2}  alt="Rasam 2"/>
//             </div>
//             <h2>Second Slide</h2>
//           </div>
//           <div className="each-fade">
//             <div className="image-container">
//               <img src={image3}  alt="Rasam 3" />
//             </div>
//             <h2>Third Slide</h2>
//           </div>
//         </Fade>
//       </div>
//     )
//   }

//   export default Slideshow;