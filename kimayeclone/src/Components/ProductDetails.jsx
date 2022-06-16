import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom';

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

const  Productdetails = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const params=useParams();
    useEffect(()=>{
        setLoading(true)
        const {id}=params;
        axios({
          url:` http://localhost:3000/data/${id}`,
          method: "get"
        }).then(res=>{
            // console.log(res.data);
           setData(res.data);
           setLoading(false)

        }).catch((error)=>{
            setLoading(false)
        })
    },[params])
    console.log(data)
  return (
    <div>
       
        {/* Product:{id}:{data.find((i)=>i.id===id).heading} */}
       
         <div key={data.id}>
         <h1>Product details</h1>
       
      {/* <div>{data.imageurl}</div> */}
      {/* <div>{data.description}</div>
      <div><img src={data.image} alt="data" /></div>
       <div>{data.price}</div>
       <div>{data.rating}</div>
       <div>{data.title}</div> */}
         </div>
    </div>
  )
}

export default  Productdetails