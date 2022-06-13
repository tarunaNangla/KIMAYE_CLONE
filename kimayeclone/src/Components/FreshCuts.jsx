import React from 'react'
import { Link } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let data=[{  
    id:"1",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/47dfb7d1-d8d3-4c96-bda9-7dc85dfdec51_540x.png?v=1613364164",
    heading:"Pomegranate Seeds (Arils Cup)125g",
    para:"₹55 - ₹140"

},{  
    id:"2",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d_540x.png?v=1611811511",
    heading:"Coconut Chunks Cup (100g)",
    para:"₹51 - ₹130"

},{  
    id:"3",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/0fce7fd6-f30e-45df-8c52-234acbd62023_540x.png?v=1611811509",
    heading:"Grated Coconut Punnet",
    para:"₹51"

},{  
    id:"4",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/62cef687-de59-4f5a-acf3-4df1238c3e29-min_540x.png?v=1614324446",
    heading:"Kimaye Arils-Coco Cup (125g)",
    para:"₹55 - ₹140"

}]

const FreshCuts = () => {
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
        const navigate = useNavigate();
  return (
    <div className='bc'>
        <div style={{display:"flex",gap:"40px",justifyContent:"center"}}>
        <div><Link to="/fruits">ALL FRUITS</Link></div>
        <div><Link to="/freshCuts">FRESH CUTS </Link></div>
        <div><Link  to="/combos">FRUIT COMBOS </Link></div>
        <div><Link to="/gifts">GIFT BY KIMAYE</Link></div>
     </div>
     <div style={{textAlign:"left",marginTop:"100px",marginLeft:"90px"}} onClick={()=>navigate("/")}>
    <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/1200px-Home_Icon_by_Lakas.svg.png" alt="" />
    HOME/  Fresh cuts</div>
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

export default FreshCuts
