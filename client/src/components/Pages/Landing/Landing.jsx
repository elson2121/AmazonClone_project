import React from 'react'
import CarouselEffect from '../../Carousel/CarouselEffect '
import Header from '../../Header/Header'
import Product from '../../Product/Product'
import Catagory from '../../Carousel/Catagoryfullinfo/Catagory'
import Layout from '../../Layout/Layout'
const Landing = () => {
  return (
     
    <Layout> 
     {/* <Header/> */}
    <CarouselEffect />
    <Catagory/>
    <Product/> 
    </Layout>
    
  )
}

export default Landing
