import React from 'react'
import classes from './NavigationItem.module.css'
import { Link } from 'gatsby'

const navigationItem = ( props ) => (
    <li className = {classes.NavigationItem}>
        <Link  
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</Link>
    </li>
)

export default navigationItem;