import React from 'react'
import {Routes,Route} from "react-router-dom"
import Navbar from  "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import AllFruitsProduct from './AllFruitsProduct'
import FreshCuts from './FreshCuts'
import FruitCombos from './FruitCombos'
import GiftsByKimaye from './GiftsByKimaye'
import Knowmore from './Knowmore'
import GrapeFamily from './GrapeFamily'
import Productdetails from './ProductDetails'
import Login from './Login'
import Signin from './Signin'
import Signup from './Signup'
import Cart from './Cart'
import Checkout from './Checkout'
import Payment from './Payment'

const AllRoutes = () => {
  return (
    <div>
     <Navbar/>   
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/fruits' element={<AllFruitsProduct/>}>

       
        </Route>
        <Route path={"/fruits/id"} element={<Productdetails/>}></Route>
        <Route path="/freshCuts" element={<FreshCuts/>}></Route>
        <Route path="/combos" element={<FruitCombos/>}></Route>
        <Route path="/gifts" element={<GiftsByKimaye/>}></Route>
        <Route path="/grape" element={<GrapeFamily/>}></Route>
        <Route path='/knowmore' element={<Knowmore/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/login/signin" element={<Signin/>}></Route>
        <Route path="/login/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default AllRoutes
