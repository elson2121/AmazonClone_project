import React from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsCart } from "react-icons/bs";
import classs from './Header.module.css'
import LowerHeader from './LowerHeader';
const Header = () => {
  return (
   <>
   <section> 
<div className={classs.header_container}>
{/* logo  section  */}
<div className={classs.logo_container}> 
    <a href=""> 
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon log" /></a>
<div className={classs.delivery}> 
     <span className={classs.location_icon}> <SlLocationPin />
  </span> 
    <div>    <p>Delivered to</p>
    <span>Ethiopia</span>         </div>
   
    </div>
</div>
 
   {/* search  section  */}
<div className={classs.search_container}>
  
    <select name="" id=""> <option value="">All</option> </select>
    <input type="text" name="" id="" placeholder='Search Product' />
   <BsSearch className={classs.search_icon} />
    {/* icon  */}
    
     </div>
<div> 
   {/* right side link   */}
   <div> 
   

<div className={classs.americaflag}>
    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="" />
    {/* This is the corrected HTML for a dropdown */}
    <select name="language" id="language" className={classs.language_select}>
        <option value="en">EN</option>
        <option value="es">ES</option>
    </select>
</div>

 
    {/* the three components  */}
<a href=""><div>
    <p>sing in </p>
    <span>Account & Lists </span></div></a>
{/* orders  */}
<a href="">
    <p>returns</p>
    <span> & Orders</span>
</a>
 {/* cart */}
                            <a to={"/cart"} className={classs.cart_link}> 
                                <BsCart className={classs.cart_icon} /> {/* Add the cart icon */}
                                <span> 0</span> {/* The cart count */}
                            </a>
   </div>
</div>
   </div>
   </section>
   <LowerHeader />
   
   </>
  )
}

export default Header
