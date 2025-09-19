import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'
import ProductCard from './ProductCard'
import classes  from './Product.module.css'
import Loder from '../Loder/Loder'
const Product = () => {
    const [product,setProduct]=useState([])
    const [isloading,setisloading]=useState(false)
    useEffect(()=>{
        setisloading(true);
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setProduct(res.data)
            setisloading(false);
        }).catch((err)=>{
        console.log(err)
    })
},[])
    return (
        <>
        {
            isloading ? (<Loder/>):(<div className={classes.product_container}>
            {
               
                product?.map((singleproduct)=>{
                    return(
                        // The extra </div> was here. I have removed it.
                         
                        <ProductCard product={singleproduct} key={singleproduct.id} />
                    )
                })
            }
        </div> )
        }
        </>
        
    )
}


export default Product