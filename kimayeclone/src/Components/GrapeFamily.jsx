import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

let data=[{  
    id:"1",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_1_540x.png?v=1642492575",
    heading:"Kimaye Three Grape Combo",
    para:"₹152"

},{  
    id:"2",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/b2fdf9f3-93a9-4ae2-bd80-bfaf63af08d9_540x.png?v=1615017122",
    heading:"Variety: Sharad Seedless (500g)",
    para:"₹90 - ₹95"

},{  
    id:"3",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/bd07b8e7-3643-4a98-996e-c85fd7d133a8_540x.png?v=1614765886",
    heading:"Red Globe Imported (400g)",
    para:"₹225"

},{  
    id:"4",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/9ebb0dfa-3897-42a3-97be-5a0ecb8491f8_540x.png?v=1615016898",
    heading:"Kimaye Grapes (Super Sonaka Seedless) (500g)",
    para:"₹115"

},{  
    id:"5",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dbe751de-009c-4454-a3f1-42375be8bb15_540x.png?v=1614859367",
    heading:"Kimaye Grapes (Jumbo Seedless) (500g)",
    para:"₹95"

},{  
    id:"6",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/069bdaa3-eca4-4f4c-8f02-970a626f7be3_540x.png?v=1616393545",
    heading:"Kimaye Grapes (Flame Seedless (500g & 2kg)",
    para:"₹92 - ₹368"

},{  
    id:"7",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/GPS-BB_540x.png?v=1642492910",
    heading:"Kimaye Blueberry-Green Grapes Combo",
    para:"₹403"

},{  
    id:"8",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Grapescombo_540x.png?v=1641883595",
    heading:"Kimaye Green & Black Grapes Combo (250 g & 250 g) ",
    para:"₹95"

},{  
    id:"9",
    imageurl:"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/FL-Sharad_Combo_540x.png?v=1652163520",
    heading:"Kimaye Sharad - Flame Grapes Combo",
    para:"₹333"

}]
const GrapeFamily = () => {
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

export default GrapeFamily
