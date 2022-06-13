import React from 'react'
import { Link } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


let data=[{  
    id:"1",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7790_540x.jpg?v=1631346990",
    heading:"Fruit Box by Kimaye (Strength)",
    para:"₹ 2000"

},{  
    id:"2",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7807_540x.jpg?v=1631347621",
    heading:"Fruit Box by Kimaye (Adore)",
    para:"₹ 1800"

},{  
    id:"3",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/2I8A7821_540x.jpg?v=1631350656",
    heading:"Fruit Box by Kimaye (Cherish)",
    para:"₹ 1400"

},{  
    id:"4",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/I8A9400copy_540x.jpg?v=1651844098",
    heading:"Fruit Box by Kimaye (Seasonal)",
    para:"₹ 1200"

}]
const GiftsByKimaye = () => {
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
    <div className='bc' >
        <div style={{display:"flex",gap:"40px",justifyContent:"center"}}>
        <div><Link to="/fruits">ALL FRUITS</Link></div>
        <div><Link to="/freshCuts">FRESH CUTS </Link></div>
        <div><Link  to="/combos">FRUIT COMBOS </Link></div>
        <div><Link to="/gifts">GIFT BY KIMAYE</Link></div>
     </div>
      {/* GiftsByKimaye */}
      <div style={{textAlign:"left",marginTop:"100px",marginLeft:"90px"}} onClick={()=>navigate("/")}>
    <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/1200px-Home_Icon_by_Lakas.svg.png" alt="" />
    HOME/ Gifts by kimaye</div>
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

export default GiftsByKimaye
