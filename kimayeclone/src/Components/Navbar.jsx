import React from 'react'

// import  { Component } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div  className='flex'>
    <div className='flexf'>


                  <div >

                      <div className="dropdown">
                      <span>SHOP</span>
                      <div className="dropdown-content">
                      <p onClick={()=>navigate("/fruits")}>ALL FRUITS</p>
                      <p onClick={()=>navigate("/freshCuts")}>FRESH CUTS</p>
                      <p onClick={()=>navigate("/combos")}>FRUIT COMBO</p>
                      <p onClick={()=>navigate("/gifts")}>GIFTS BT KIMAYE</p>
                      <p onClick={()=>navigate("/grape")}>GRAPE FAMILY BY KIMAYE</p>
                      <p>RETURN AND REPLACEMENT</p>
                      <p>COMMUNITY BUYING</p>
                     </div>
                      </div>
                  </div>

                  <div className="dropdown">
                   <span>LEARN</span>
                   <div className="dropdown-content">
                   <p>OUR STORY</p>
                   <p>WHY KIMAYE</p>
                   <p>TRACEABILITY</p>
                   <p>BEYOND FRUITS</p>
                   </div>
                </div>

                <div >
                <span>GROW</span>
                
                </div>
    
                   
    </div>

         <div>
            <img onClick={()=>navigate("/")} style={{height:"45px", width:"150px", }} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="kimaye"></img>
        </div>
    

        <div className='flexf' style={{marginTop:"10px"}}>

        <div>
            <img style={{height:"30px", width:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png"></img>
      
        </div> 

        <div>
            <img style={{height:"30px", width:"30px" }} src="data:image/png;base64,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"></img>
        </div>

       <div >
           <img style={{height:"30px", width:"30px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwTJJWgY_YJ_EubAzNZvIHWQjEH-yirjllg&usqp=CAU"></img>
        </div> 
        </div>

        </div>
  )
}

export default Navbar
