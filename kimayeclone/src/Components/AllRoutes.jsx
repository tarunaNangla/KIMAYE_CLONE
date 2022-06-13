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
const AllRoutes = () => {
  return (
    <div>
     <Navbar/>   
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/fruits' element={<AllFruitsProduct/>}></Route>
        <Route path="/freshCuts" element={<FreshCuts/>}></Route>
        <Route path="/combos" element={<FruitCombos/>}></Route>
        <Route path="/gifts" element={<GiftsByKimaye/>}></Route>
        <Route path="/grape" element={<GrapeFamily/>}></Route>
        <Route path='/knowmore' element={<Knowmore/>}></Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default AllRoutes
