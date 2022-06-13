import React from 'react'

const Footer = () => {
  return (
    <div style={{backgroundColor:"#6f924a",height:"400px"}}>
       <div className='footerdiv'>
        <div style={{marginTop:"100px"}}>
           <span>FAQ's</span>  <br/>
           <span>Contact Us</span>  <br/>
           <span>Shipping & Return Policy</span> <br/>
           <span>Terms & Conditions</span><br/>
           <span>Privacy Policy</span>
        </div>
        <div style={{marginTop:"100px"}}>
          <span>Follow us on</span><br/>
          <div style={{display:"flex",gap:"10px"}}>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/fb-icon.png?v=1599571756" alt="" />

            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/insta-icon.png?v=1599571756" alt="" />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/twitter-icon.png?v=1599571756" alt="" />
            </div>
          </div>
           
        </div>
       </div>
       <hr  style={{backgroundColor:"black",magringTop:"50px",height:"1px",marginLeft:"190px",marginRight:"190px"}}/>
      <div className='footerdiv'>
         <div>Copyright©2020. All Rights Reserved</div>
         <div>
          <img src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/ting.png?v=1599565040" alt="" />
         </div>
      </div>
    </div>
  )
}

export default Footer
