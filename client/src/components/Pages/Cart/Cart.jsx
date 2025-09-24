import React, { useContext } from 'react'
import Layout from '../../Layout/Layout'
import { DataContext } from '../../Dataprovider/Dataprovider'
import ProductCard from '../../Product/ProductCard';
import CurrencyFormat from '../../CurrenctyFormat/CurrenctyFormat';
import {Link} from 'react-router-dom'
import classes from './Cart.module.css'
import { Type } from '../../../Utils/actiontype';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function Cart() {
  const [{basket,user},dispatch] = useContext(DataContext);
const total=basket.reduce((amount,item)=>{
  return item.price * item.amount + amount
  
},0) 
//to add the tap button that add and remove the choice fromt the cart items 
const increment=(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
  })
}
const decrement = (id)=>{
  dispatch({
    type : Type.REMOVE_FROM_BASKET,
    id
  })
}


 
  return (
    <div>
        <Layout>  
       <section className={classes.container}> 
        <div className={classes.cart_container}> <h2> Hello </h2> 
        <h3> Your  Shoping basket </h3>
        <hr />
        {
          basket?.length==0?(<p>Opps ! No  items in your cart </p>):(
            basket?.map((item,i)=>{
              return <section className={classes.cart_product}> 
             return <ProductCard
             key={i}
             product={item}
             renderDesc={true}
            //  renderApp={false }
             flex={true}
             renderAdd={false}  
              //this line the line that hass the errro an the line that make me to work lot 
             />  
             <div className={classes.btn_container}>
<button className={classes.btn} onClick={()=>increment(item)}> < IoIosArrowUp size={30}/> </button> 
<span>{item.amount} </span>
<button  className={classes.btn} onClick={()=>decrement(item.id)}><IoIosArrowDown  size={30}/>  </button>
             </div>
             </section>
            })
          )
        } 
        </div>
        {basket?.length !==0&&(
<div className={classes.subtotal}>
       <div> <p> Subtotal ({basket?.length}items)
       </p>
       <CurrencyFormat  
       amount={total}
       />
       </div> 
       <span> 
        <input type="checkbox"/>
        <small> this order contains  a gift </small>
          </span>  
          <Link to='/payments'> Contiues to check out </Link>
        </div>
        ) }
        
       </section>
      </Layout>
    </div>
  )
}

export default Cart
