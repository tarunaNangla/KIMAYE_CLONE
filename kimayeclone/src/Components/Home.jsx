import React from 'react'
// import Navbar from './Navbar'
import DemoCarousel from './Slider'
// import Footer from './Footer'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
        
     {/* <DemoCarousel/> */}
     <div  className='midhome' >

       <div style={{paddingTop:"100px"}}>
            <img style={{paddingRight:"300px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/t/25/assets/recom-leaf.png" alt="leaf" />
            <div className='one'>KIMAYE RECOMMENDS</div>
            <div className='two'>A Handpicked and Curated Fruit offering</div>
       </div>
     <div className='homefruit'>
        
        <div className='zoom' >
            <div className='zoomm'>

            <img style={{height:'500px',borderRadius:"30px",width:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-1-min_670x.png?v=1614338437" alt="" />
            </div>
            <div>

            <h1>ALL FRUITS</h1>
            <div>Pick and choose from a wide range of delicious fruits</div>
            <button onClick={()=>navigate("/fruits")}>Shop Now</button>
            </div>
        </div>

        
        <div className='zoom'>
            <div className='zoomm'>

            <img style={{height:'500px',borderRadius:"30px",width:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-3-min_670x.png?v=1614338730" alt="" />
            </div>
            <div>

             <h1>FRESH CUTS</h1>
             <div>We want to spoon-feed you… quite literally</div>
             <button  onClick={()=>navigate("/fruits")}>Shop Now</button>
            </div>
        </div>
        <div className='zoom'>
            <div className='zoomm'>

            <img  style={{height:'500px',borderRadius:"30px",width:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/collections/recommended-2-min_670x.jpg?v=1614339080" alt="" />
            </div>
            <div>

            <h1>FRESH CUTS</h1>
             <div>We want to spoon-feed you… quite literally</div>
             <button  onClick={()=>navigate("/fruits")}>Shop Now</button>
            </div>
        </div>
        <div className='zoom'>
            <div className='zoomm'>

            <img style={{height:'500px',borderRadius:"30px",width:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/2I8A6078_670x.jpg?v=1631516874" alt="" />
            </div>
            <div>

            <h1>FRUIT COMBOS</h1>
             <div>Indulge in fruit combinations created by us</div>
             <button  onClick={()=>navigate("/fruits")}>Shop Now</button>
            </div>
        </div>
     </div>
      <div style={{background:"#6f924a"}}>

      <div className='kimmadis'>
       
       <div>
        <img style={{height:"700px",width:"500px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/kimahi_570x_2db87855-9260-47c2-a80e-3759af77dbea_570x.png?v=1622009438" alt="" />
       </div>
       <div>
        <h1 style={{color:"white"}}>WE'D LIKE TO SAY <span style={{color:'red'}}>KIMA</span>HI…</h1>
        
        <p style={{color:"white",fontSize:"17px"}}>Many of us share common safety concerns about the food we eat.</p>
        <p style={{color:"white",fontSize:"17px"}}>When it comes to fruits, these concerns are even more serious in terms of the way they are grown and handled throughout their farm-to-home journey. We make eating fruits a worry-free and enjoyable experience for you.</p>
        <p style={{color:"white",fontSize:"17px"}}>Since 2009, we have set the benchmark for fruit safety and quality in 35 countries. Kimaye is now expanding its footprint in India, bringing you multiple varieties of fruit that are grown, packaged, and delivered in the safest and most socially responsible manner.</p>
        <span style={{background:"white",fontSize:"25px",height:"20px",width:"500px",fontWeight:"bold"}}>Kimaye is #all<span style={{color:"red"}}>Safe</span>#all<span style={{color:"red"}}>Good</span></span><br></br>

        <button  onClick={()=>navigate("/kn")} style={{color:"#6f924a",background:"#c5d3b7",borderColor:"#c5d3b7",fontSize:"20px",height:"50px",width:"150px",marginTop:"30px"}}>KNOW MORE</button>
       </div>

      </div>
      </div>
      <div className='journey'>
        <h1>THE SECRET'S OUT: WE'RE SUPER SAFE</h1>
        <h4>Witness Our Journey</h4>
      </div>
      

      <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>01</p>
            {/* <p>Grown</p>
            <p>reponsibility</p> */}
          
            <p className='right'>
            We follow G.A.P (Good Agricultural Practices) to ensure food safety.
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px",width:"600px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149" alt="" />
         </div>


         
      </div>
    

      
      {/* <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>02</p>
            
            <p className='right'>
            We follow G.A.P (Good Agricultural Practices) to ensure food safety.
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-1_guetzli-min.jpg?v=1614755149" alt="" />
         </div>


         
      </div> */}



      
      <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>02</p>
            {/* <p>Grown</p>
            <p>reponsibility</p> */}
            <p className='right'>
            Stringent quality checks at our automated pack house ensure only the best fruits go through.
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px",width:"600px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-2_guetzli-min.jpg?v=1622009925" alt="" />
         </div>


         
      </div>



      
      <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>03</p>
            {/* <p>Grown</p>
            <p>reponsibility</p> */}
            <p className='right'>
            The fruits are then packaged and delivered fresh in a contamination-free environment.
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px",width:"600px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-3_guetzli-min.jpg?v=1614755148" alt="" />
         </div>



         


         
      </div>


      <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>04</p>
            {/* <p>Grown</p>
            <p>reponsibility</p> */}
            <p className='right'>
            Tell us all about how you enjoy our fruits using #allSafe#allGood
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px",width:"600px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-4_guetzli-min.jpg?v=1622009925" alt="" />
         </div>



         


         
      </div>




      <div className='main'>
         <div style={{display:"flex",flexDirection:"column",gap:"0"}}>
          
           <p className='no'>05</p>
            {/* <p>Grown</p>
            <p>reponsibility</p> */}
            <p className='right'>
            We follow G.A.P (Good Agricultural Practices) to ensure food safety.
            </p>
         </div>
         <div>
            <img style={{borderRadius:"30px",height:"550px",width:"600px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/files/secret-5_guetzli-min.jpg?v=1622009925" alt="" />
         </div>



         


         
      </div>



    
    {/* new div */}

    <div style={{backgroundColor:" #f9d888",paddingTop:"100px", paddingBottom:"100px",marginTop:"100px"}}>

        <h1 style={{textAling:"center"}}>JAZZ IT UP WITH FRUITS</h1>

        <div className='dank'>

            <div>
               <img style={{width:"600px",height:"350px",borderRadius:"30px"}} src="https://fascinating-pithivier-6c0fea.netlify.app/2.png" alt="" />

            </div>
            <div>
 
               <img style={{width:"600px",height:"350px",borderRadius:"30px"}} src="https://fascinating-pithivier-6c0fea.netlify.app/3.png" alt="" />
            </div>

        </div>

    </div>


      <h1 style={{textAling:"center"}}>PSST… LOOKIN' FOR US?</h1>
      <p style={{textAling:"center",fontSize:"30px"}}>We are here</p>


      <div className='last'>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}}src="https://scontent.cdninstagram.com/v/t51.29350-15/286476421_5512742678790182_9133878254313440813_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=CnryRuUG1r8AX-toUIw&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-yOcODn8I8gHwCl4KwW5AGHGAQVzIZdOgaaXqsMiuCyw&oe=62A91C15" alt="" />
        </div>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://scontent.cdninstagram.com/v/t51.29350-15/286027759_416785993449025_2116452231653606930_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=x4FoKoITEjUAX_ofC5p&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-0UV01xxO9L70GkJEdcjEQ7x0MtIe9Y4MhsWl1A6FZSA&oe=62A93734" alt="" />
        </div>
        <div>
            <video style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://video.cdninstagram.com/v/t50.16885-16/285909835_603589997451548_6522251493369985266_n.mp4?_nc_cat=111&vs=5485571498133973_257908270&_nc_vs=HBksFQAYJEdFdWpDaEVjV1dNLTlpUUNBUEk0RkVZdHNZTmFidlZCQUFBRhUAAsgBABUAGCRHRkFZQ3hFOTZXX2pMWHNBQUlVb0M3aHN4d3hFYnZWQkFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACa6ifqGtqXbPxUCKAJDMywXQCLPXCj1wo8YEmRhc2hfYmFzZWxpbmVfMV92MREAdewHAA%3D%3D&ccb=1-7&_nc_sid=59939d&efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5pZ3R2In0%3D&_nc_ohc=ivHHw-CeE-0AX8QdXsq&_nc_ht=video.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_JSf9KYviVZAueqczJntPcx-RSteorPEBYYLWQ4CnTYg&oe=62A4FCAA&_nc_rid=d5873528c1"></video>
        </div>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://scontent.cdninstagram.com/v/t51.29350-15/285540497_766260721220580_2690661920226980915_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=jj62hBHYpNAAX_TGGNq&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT_nizfsaDDya8cnbvoFLWkn_o36FAuE3I-Wm0j_6Q4JNQ&oe=62A88483" alt="" />
        </div>
      </div>

      {/* <Footer /> */}
     </div>
     

     



    </div>
  )
}

export default Home
