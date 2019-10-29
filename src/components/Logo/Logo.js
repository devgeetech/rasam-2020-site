import React from 'react'

import classes from './Logo.module.css'
import rasLogo from '../../../content/logos/rasBNW.png'

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={rasLogo} alt="Rasam logo"/>
    </div>
);

export default logo;