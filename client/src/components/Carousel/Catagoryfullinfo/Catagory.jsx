import React from 'react'
import {catagoryImages } from './Catagoryfullinfo'
import CatagoryCard from './CatagoryCard'
import classes from './Catagory.module.css'
const Catagory = () => {
  return (
    <section className={classes.catagory_section}>
 { 
    catagoryImages?.map((infos,id)=>( 
        <CatagoryCard 
                        key={id} // Add the unique key prop here
                        data={infos}
                    />

    ))
    }
    </section>
  )
}

export default Catagory
