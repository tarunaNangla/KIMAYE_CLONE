import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from "axios"


let data=[{  
    id:"1",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/litchi--_-keasr_540x.jpg?v=1654850892",
    heading:"Kimaye Litchi-Kesar Combo",
    para:"₹393"

},{  
    id:"2",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Cherry--_-blueberry_540x.jpg?v=1654851019",
    heading:"Kimaye Cherry- Blueberry Combo",
    para:"₹408"

},{  
    id:"3",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-litchi_540x.jpg?v=1654850921",
    heading:"Kimaye Litchi -Peach Combo",
    para:"₹277"

},{  
    id:"4",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/peach--_-Plum_540x.jpg?v=1654851067",
    heading:"Kimaye Plum-Peach Combo",
    para:"₹120"

},{  
    id:"5",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Plum_BB_540x.jpg?v=1621068661",
    heading:"Kimaye Plum-Blueberries Combo",
    para:"₹498"

},{  
    id:"6",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Kesar_BB_540x.jpg?v=1623393336",
    heading:"Kimaye Kesar- Blueberries Combo",
    para:"₹609"

},{  
    id:"7",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MangoBlueberry_1_540x.png?v=1618035441",
    heading:"Kimaye Alphonso-Blueberries Combo",
    para:"₹619"

},{  
    id:"8",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/FL-Sharad_Combo_540x.png?v=1652163520",
    heading:"Kimaye Sharad - Flame Grapes Combo",
    para:"₹333"

},{  
    id:"9",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MicrosoftTeams-image_1_540x.jpg?v=1649415923",
    heading:"Kimaye Summer Combo",
    para:"₹333"

},{  
    id:"10",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Wholesome-combo_540x.jpg?v=1618497683",
    heading:"Kimaye Wholesome Combo",
    para:"₹831"

},{  
    id:"11",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_540x.png?v=1642492575",
    heading:"Kimaye Three Grape Combo",
    para:"₹152"

},{  
    id:"12",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_540x.png?v=1642492910",
    heading:"Kimaye Kiwi-Blueberries Combo",
    para:"₹403"

},{  
    id:"13",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/KiwiBlueberry_540x.png?v=1617983685",
    heading:"Kimaye Kiwi-Blueberries Combo",
    para:"₹564"

},{  
    id:"14",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_540x.png?v=1641883595",
    heading:"Kimaye Green & Black Grapes Combo (250 g & 250 g)",
    para:"₹564"

}]

const FruitCombos = () => {
    const navigate = useNavigate();
//     const [data,setData]=useState([]);
//   const [loading,setLoading]=useState(false);
//   useEffect (()=>{
//     axios({
//       url:"  http://localhost:3000/data",
//       method:"get"
//     }).then(res=>{
//       setData(res.data);

//     }).catch(error=>{
//       setLoading(false)
//     })
//   },[])
//   console.log(data)
  return (
    <div className='bc'>
        <div style={{display:"flex",gap:"40px",justifyContent:"center"}}>
        <div><Link to="/fruits">ALL FRUITS</Link></div>
        <div><Link to="/freshCuts">FRESH CUTS </Link></div>
        <div><Link  to="/combos">FRUIT COMBOS </Link></div>
        <div><Link to="/gifts">GIFT BY KIMAYE</Link></div>
     </div>
      {/* FruitCombos */}
      <div style={{textAlign:"left",marginTop:"100px",marginLeft:"90px"}} onClick={()=>navigate("/")}>
    <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/1200px-Home_Icon_by_Lakas.svg.png" alt="" />
    HOME/  Fruit combos</div>
<div className='griddata'>
     
     {

       data.map((ele)=>{
         return(
           <div key={ele.id}>
                   <div><img style={{width:"350px",height:"350px",borderRadius:"30px"}} src={ele.imageurl} alt="photo" /></div>
                   <p>{ele.heading}</p>
                   <span style={{color:"red",fontWeight:"bold"}}>Price: {ele.para}</span>
                   
           </div>
         )
       })
     }
   </div>
    </div>
  )
}

export default FruitCombos
