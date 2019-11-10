import React from 'react'

import classes from './Logo.module.css'
import rasLogo from '../../../content/logos/rasBNW.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={rasLogo} alt="Rasam logo"/>
        {/* <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572351338/rasamIcons/rasBNW_exbrao.png" alt="Rasam logo"/> */}
        {/* <picture>
            <source srcset="https://res.cloudinary.com/devgeetech/image/upload/q_100/v1572351338/rasamIcons/rasBNW_exbrao.webp" />
            <img src="https://res.cloudinary.com/devgeetech/image/upload/v1572351338/rasamIcons/rasBNW_exbrao.png" alt="Logo"/>
        </picture> */}
    </div>
);

export default logo;