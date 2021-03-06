import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

let data=[ {   "id":"1",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover_19473cce-96ae-4149-aaa1-508f17ac6c28.progressive.jpg?v=1648186636",
"heading" :"Kimaye Blueberries (125g)",
"para":"₹ 335"
},
{
"id":"2",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover.progressive.jpg?v=1647932788",
"heading" :"Kimaye Peach (Pack of 2 pc & 4 pc)",
"para":"₹ 597"
},
{
"id":"3",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MangoCover_908c34e6-fcdb-4564-918e-48d7baeaf628.progressive.jpg?v=1645445684",
"heading" :"Kimaye Avocado Imported (1pc ≈ 250g)",
"para":"₹ 330"
},
{
"id":"4",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/5e8b2ee6-ce8e-42e9-959f-d43c544f586a.png?v=1616326949",
"heading" :"Kimaye Pear Green (Pack of 2 & 4)",
"para":"₹ 128"
},
{
"id":"5",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/donut-peach-cover.progressive.jpg?v=1647000498",
"heading" :"Kimaye Imported Oranges (Pack of 3 & 6)",
"para":"₹ 105"
},
{
"id":"6",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado.progressive.jpg?v=1622045722",
"heading" :"Kimaye Nagpuri Santra (2 pc & 4 pc )",
"para":"₹ 107"
},
{
"id":"7",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/463b5516-614a-4a66-9556-f4a09e45afbc.png?v=1614326370",
"heading" :"Kimaye Grapes (Flame Seedless (500g & 2kg)",
"para":"₹ 105"
},
{
"id":"8",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309.png?v=1611811512",
"heading" :"Kimaye Dragon Fruit (1 pc)",
"para":"₹ 135"
},
{
"id":"10",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/069bdaa3-eca4-4f4c-8f02-970a626f7be3.png?v=1616393545",
"heading" :"Kimaye Grapes (Flame Seedless (500g & 2kg)",
"para":"₹ 105"
},
{
"id":"11",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover.progressive.jpg?v=1632470660",
"heading" :"Kimaye Dragon Fruit (1 pc)",
"para":"₹ 135"
},
{
"id":"12",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_6875ada8-f1e6-4589-b1fd-6f13a86b8ddb-min_540x.jpg?v=1614326164",
"heading" :"Kimaye Kiwis (3 pcs ≈ 300 g)",
"para":"₹ 155"
},
{
"id":"13",
"imageurl":"https://cdn.shopify.com/s/files/1/0449/5225/6667/products/24d0f9c9-fe83-40a3-84ab-300e73e4ff8d.png?v=1611811511",
"heading" :"Coconut Chunks Cup (100g)",
"para":"₹  51"
}]

const AllFruitsProduct = () => {
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
     {/* AllFruitsProduct
      */}
<div style={{textAlign:"left",marginTop:"100px",marginLeft:"90px"}} onClick={()=>navigate("/")}>
    <img style={{width:"20px",height:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Home_Icon_by_Lakas.svg/1200px-Home_Icon_by_Lakas.svg.png" alt="" />
    HOME/ All Fruits</div>
<div className='griddata' >
     
     {

// {`/fruits/${ele.id}`}
       data.map((ele)=>{
         return(
           <div key={ele.id}>
                   <div >
                    <Link to={`/fruits/${ele.id}`}>

                        <img  style={{width:"350px",height:"350px",borderRadius:"30px"}} src={ele.imageurl} alt="photo" />
                    </Link>
                         <div onClick={()=>navigate("/cart")}>Add to cart</div>
                       </div>
                  
                   <p>{ele.heading}</p>
                   <span style={{color:"red",fontWeight:"bold"}}>Price: {ele.para}</span>
                   <div>
                    <Outlet/>
                    </div>
                   
           </div>
         )
       })
     }
   </div>



    </div>
  )
}

export default AllFruitsProduct
