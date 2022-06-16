import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {
    const navigate = useNavigate();
    return (
    <div style={{display:"flex",justifyContent:"center",marginLeft:"200px",marginRight:"200px",paddingBottom:"100px"}} >
      
      <div>
      <div  style={{marginRight:"700px"}}>
            <img onClick={()=>navigate("/")} style={{height:"45px", width:"150px", }} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/website-logo_400x.png?v=1596288204" alt="kimaye"></img>
      </div>
      <div  style={{textAlign:"left"}}>
        <h2>Cart 
            <span> <img style={{width:"20px",height:"20px"}} src="data:image/png;base64,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" alt="" />   </span> 
               Information <span> <img style={{width:"20px",height:"20px"}} src="data:image/png;base64,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" alt="" />   </span>

                Shipping <span> <img style={{width:"20px",height:"20px"}} src="data:image/png;base64,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" alt="" />   </span>
                 Payment
        </h2>
      </div>

      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{display:"flex", gap:"100px",border:"1px solid black"}}>
            <h3>Contact</h3>
            <p>tarunananagla111@gmail.com</p>
        </div>
       
        <div style={{display:"flex", gap:"100px",border:"1px solid black"}}>
        <h3>Ship to</h3>
            <p>Dwarka, New delhi</p>
        </div>
        <div style={{textAlign:"left"}}>
        <p>Shipping Method</p>
        <div style={{border:"1px solid black"}}>Your cart has been updated and the previous shipping rate isn't valid. Select a new rate.</div>
        <br />
        <div style={{border:"1px solid black"}}>Free Shipping</div>

        </div>

        <div>
            <h2>Cards Details :</h2>
            <input style={{width:"100%"}} type="number" placeholder='Card Number (without space)' />
            <div style={{display:"flex",gap:"10px"}}>
                <div ><input style={{width:"350px"}} type="text" placeholder='MM/YY' /></div>
                <div><input style={{width:"350px"}} type="text" placeholder='CVV' /></div>
            </div>
        </div>

        <div style={{marginRight:"500px"}}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILwBNq13Ry-XkDl0XR7F8G0rifl3cQdPZchGLL4g5fdekKeyWeFds7ti-gUtHE9-xDLI&usqp=CAU" alt="" /></div>
        <button onClick={()=>navigate("/payment")} style={{width:"50%",height:"100px",background:"#6f924a",borderColor:"#6f924a",borderRadius:"1px",fontSize:"20px"}}>Make the payment</button>
      </div>
      
      </div>

      {/* another div */}
      <div style={{paddingLeft:"90px"}}>
      <div className='cartflex'  style={{gap:"100px"}}>
      
        <div><img style={{height:"100px",weight:"100px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/MangoCover_908c34e6-fcdb-4564-918e-48d7baeaf628.progressive.jpg?v=1645445684" alt="" /></div>
        <div><p>Kimaye Alphonso Mangoes</p></div>
        <div><p>300</p></div>
        
      </div>

      <div className='cartflex' style={{gap:"100px"}}>
        
        <div><img style={{height:"100px",weight:"100px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/cover.progressive.jpg?v=1647932788" alt="" /></div>
        <div><p>Kimaye Green Apples (3pc)</p></div>
        <div><p>150</p></div>
        
      </div>
      <hr />
      <br />
      <div style={{display:"flex", gap:"20px"}}>
         <div>
              <input style={{border:"1px solid black",height:"35px", width:"250px",marginTop:"17px"}} type="text" placeholder='Gift Card or discount code'/>

         </div>
         <div>
            <button onClick={()=>navigate("/payment")} style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px"}}>Apply</button>
         </div>
      </div>
      <br />
       <hr />
       <br />
       <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div><h4>Subtotal:</h4></div>
                         <div><h4>₹ 731</h4></div>
                </div>
        <br />
        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div><h4>Shipping</h4></div>
                         <div><h4>Free</h4></div>
                </div>    
                <hr />
                <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div><h4>Total</h4></div>
                         <div><h4>₹ 731</h4></div>
                </div>            
      </div>
    </div>
  )
}

export default Checkout
