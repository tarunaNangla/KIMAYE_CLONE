import React from 'react'
import { Link } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AllFruitsProduct = () => {
    const navigate = useNavigate();
    const [data,setData]=useState([]);
  const [loading,setLoading]=useState(false);
  useEffect (()=>{
    axios({
      url:"  http://localhost:3000/data",
      method:"get"
    }).then(res=>{
      setData(res.data);

    }).catch(error=>{
      setLoading(false)
    })
  },[])
  console.log(data)
  return (
    <div className='bc'>
     <div style={{display:"flex",gap:"40px",justifyContent:"center"}}>
        <div><Link to="/fruits">ALL FRUITS</Link></div>
        <div><Link to="/freshCuts">FRESH CUTS </Link></div>
        <div><Link  to="/combos">FRUIT COMBOS </Link></div>
        <div><Link to="/gifts">GIFT BY KIMAYE</Link></div>
     </div>
     {/* AllFruitsProduct
      */}
<div style={{textAlign:"left",marginTop:"100px",marginLeft:"90px"}} onClick={()=>navigate("/")}>
    <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/1200px-Home_Icon_by_Lakas.svg.png" alt="" />
    HOME/ All Fruits</div>
<div className='griddata'>
     
     {

       data.map((ele)=>{
         return(
           <div key={ele.id}>
                   <div><img  style={{width:"350px",height:"350px",borderRadius:"30px"}} src={ele.imageurl} alt="photo" /></div>
                  
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

export default AllFruitsProduct
