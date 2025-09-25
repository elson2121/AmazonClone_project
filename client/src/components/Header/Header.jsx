import React, { useContext } from 'react'
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BsCart } from "react-icons/bs";
import classs from './Header.module.css'
import LowerHeader from './LowerHeader';
import { Link } from 'react-router-dom';
import {DataContext} from '../Dataprovider/Dataprovider'
import { auth } from '../../Utils/firebase';
const Header = () => {
const [{user,basket}, dispatch]=useContext(DataContext)
// to show the cart read the write or the right total number of the item in the cart 
const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount 
},0)
  return (
   <>
   <section className={classs.fixed}> 
<div className={classs.header_container}>
{/* logo  section  */}
<div className={classs.logo_container}> 
    <Link to="/"> 
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG25.png" alt="amazon log" /></Link>
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
   <BsSearch className={classs.search_icon } />
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
<Link  to={!user && "/signUp"}>
<div>
    {/* if we have a user  */}
{user?(  
    
    <>  
<p> Hello {user?.email?.split("@")[0]} </p>
<span onClick={()=>auth.signOut()}>SignOut</span>
</>
):(
    <>
    <p> Hello,sing in </p>
    <span>Account & Lists </span> 
    </>

)
}

</div>
 


    
    </Link>
{/* orders  */}
<Link to="/orders">
    <p>returns</p>
    <span> & Orders</span>
</Link>
 {/* cart */}
                            <Link  to={"/cart"} className={classs.cart_link}> 
                                <BsCart className={classs.cart_icon} /> {/* Add the cart icon */}
                                <span> {totalItem} </span> {/* The cart count */}
                            </Link>
   </div>
</div>
   </div>
   </section>
   <LowerHeader />
   
   </>
  )
}

export default Header
