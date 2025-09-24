import React, { useEffect, useState } from 'react'
import Layout from '../../Layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { ProductURL } from '../../../API/endpoint';
import ProductCard from '../../Product/ProductCard';
import Loder from '../../Loder/Loder';
function ProductDetails() {
    const { id } = useParams();
    console.log(id);
    const [product, setProduct]= useState({});
    const [isloading, setislaoding]= useState(false);
    useEffect(()=>{
        setislaoding(true);
        axios.get(`${ ProductURL }/products/${id}`)
        .then((res)=>{
            setProduct(res.data)
            setislaoding(false);
             
    }).catch((err)=>{
        console.log(err)
    }) },
    [])
  return (
    <Layout> 
{isloading ? (<Loder/>):(  <ProductCard 
product={product} 
flex={true}
 
renderAdd={true}
renderDesc={true}
/>)}
   
     
    </Layout>
  )
}

export default ProductDetails
