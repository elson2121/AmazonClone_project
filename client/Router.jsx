// src/Routering.jsx (or App.js)

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './src/components/Pages/Auth/SignUp'
import Landing from './src/components/Pages/Landing/Landing'
import Orders from './src/components/Pages/Orders/Orders'
import Payment from './src/components/Pages/Payment/Payment'
import Cart from './src/components/Pages/Cart/Cart'
import Results from './src/components/Pages/Results/Results'
import ProductDetails from './src/components/Pages/ProductDetails/ProductDetails'


function Routering() {
    return (
        <Router>
            <Routes> 
                <Route path='/' element={<Landing/>}/>
                <Route path='/category/:category' element={<Results/>}/>
                <Route path ='/product/:id' element={<ProductDetails/>}/>
                <Route path='/orders' element={<Orders/>}/>
                <Route path='/payment' element={<Payment/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/auth' element={<SignUp/>}/>
            </Routes>
        </Router>
    )
}

export default Routering