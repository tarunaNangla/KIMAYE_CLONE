import React from 'react'


const Knowmore = () => {
  return (
    <div>
      <div >
      <div className='knowdiv'>
        <img  style={{width:"100%",height:"400px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Story-min.jpg?v=1614599075" alt="" />
        <div className='centered'>
            <h1 style={{background:"red",color:"white"}}>The Genesis of Kimaye</h1>
            <div>India's Global Fruit Brand</div>
           
        </div>
     
  
      </div>

      <div className='bb'>

      <div className='knowflex'>
        <div>
           <img style={{width:"500px",height:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Box.png?v=1602082370" alt="" />

        </div>
        <div className='knowleft' >
            <h1>KIMAYE WANTS TO GIVE YOU ASSURANCE AND EARN YOUR TRUST</h1>
            <p style={{fontSize:"19px"}}>by consistently delivering the safest and highest-quality fruits at your doorstep. Our roots lie in the principles of cooperation and partnership.</p>
            <p style={{fontSize:"19px"}}>Since 2009, we have focused on building a brand that promises</p>

            <div style={{display:"flex",gap:"60px"}}>
                <div>
                  <img style={{width:"100px",height:"100px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/safety.png?v=1600154657" alt="" />
                 
                  <p>Unparalleled safety</p>

                </div>
                <div>
                    <img style={{width:"100px",height:"100px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/quality.png?v=1600154658" alt="" />
                    <p>Benchmark quality</p>
                </div>
                <div>
                    <img style={{width:"100px",height:"100px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/consistency.png?v=1600154657" alt="" />
                     <p>Highest consistency</p>
                </div>
            </div>
        </div>
      </div>
      </div>


      <div style={{backgroundColor:" #f9d888",paddingTop:"100px", paddingBottom:"100px"}}>

        {/* <h1 style={{textAling:"center"}}>JAZZ IT UP WITH FRUITS</h1> */}

        <div style={{display:"flex",justifyContent:"center",marginLeft:"200px",marginRight:"200px",gap:"100px"}}>

            <div>
               <img style={{width:"400px",height:"500px",borderRadius:"30px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/Guy.png?v=1600760866" alt="" />

            </div>
            <div style={{textAlign:"left", fontSize:"20px", paddingTop:"30px"}}>
 
               <p>From being the largest exporter of pomegranates and bananas to stepping into the domestic retail market, we've come a long way by adding more colours to your plate.</p>
               <p>We work with the farmers from the time they plant the seed. Our fruits meet international safety standards at every stage of growing, sourcing, packaging, and delivery. We've worked with farmers and innovated farming and delivery techniques for better shelf life and traceability while meeting the most stringent safety norms.</p>
               <p>Our accolades are only a part of our journey. It's our mantra — <span style={{color:"red"}}> safest fruits, always</span> — that we wear as a badge of honour.</p>
               {/* <img style={{width:"600px",height:"350px",borderRadius:"30px"}} src="https://fascinating-pithivier-6c0fea.netlify.app/3.png" alt="" /> */}
            </div>

        </div>

    </div>




      </div>
    </div>
  )
}

export default Knowmore
