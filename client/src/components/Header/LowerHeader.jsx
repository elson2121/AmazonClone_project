import React from 'react'
import { IoMenu } from "react-icons/io5";
import classes from './LowerHeader.module.css'
const LowerHeader = () => {
  return (
    <div className={classes.lower_header}>
    <ul> 
    <li><IoMenu className={classes.the_menupart} />
        <p>All</p>
    </li>
    <li>Today's Deals</li>
    <li>costomer Service </li>
    <li>Registery </li>
    <li>Gift Cards</li>
    <li>Sell</li>
 
    </ul>  
    </div>
  )
}

export default LowerHeader
