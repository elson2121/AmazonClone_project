import React from 'react'
import Rating from '@mui/material/Rating'
import CurrencyFormat from '../CurrenctyFormat/CurrenctyFormat'
import classes from './Product.module.css'
import { Link } from 'react-router-dom'
// renderDesc
function ProductCard({product, flex, renderDesc}) { // Note: Removed the extra space after the comma
    const {title, id, price, image, rating,descrition} = product;
    console.log(product);

    return (
        // FIX: The entire expression is wrapped in {}.
        // The ternary operator uses backticks (``) to conditionally add the class string.
        <div className={`${classes.card_container} ${flex ? classes.product_flexed : ''}`}>
            
            <Link to={`/product/${id}`}>
                <img src={image} alt="" />
            </Link>
            <div>
                <h3>{title}</h3>
                {renderDesc && <div style={{maxWidth:"750px"}}>  {product.description}</div>}
                <div className={classes.rating}>
                    <Rating value={rating?.rate} precision={0.1}/>
                    <small> {rating?.count} </small>
                </div>
                <CurrencyFormat amount={price}/>
            </div>
            <button className={classes.button}>add to card</button>
        </div> 
    );
}

export default ProductCard;