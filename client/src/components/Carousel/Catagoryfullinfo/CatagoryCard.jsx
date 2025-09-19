import React from 'react'
import  classcatagory from './Catagory.module.css'
import { Link } from 'react-router-dom'
const CatagoryCard = ({data}) => {
 const categoryUrl = data.title.toLowerCase().replace(/\s/g, '-');   
  return (
    <div className={classcatagory.catagory_card}>
        <Link to={`/category/${categoryUrl}`} className={classcatagory.title}>
                <span>
                    <h2>{data?.title}</h2>
                </span>
                <img src={data?.imgLink} alt="" />
                <p>shop now</p>
            </Link>
    </div>
  )
}

export default CatagoryCard
