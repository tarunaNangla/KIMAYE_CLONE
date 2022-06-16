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
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}}src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/1_6875ada8-f1e6-4589-b1fd-6f13a86b8ddb-min_540x.jpg?v=1614326164" alt="" />
        </div>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/dragon-fruit--white-cover.progressive.jpg?v=1632470660" alt="" />
        </div>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/a0cfceb5-76a4-4994-9d37-978c6dc3b309.png?v=1611811512"></img>
        </div>
        <div>
            <img style={{borderRadius:"30px",height:"300px",width:"300px"}} src="https://cdn.shopify.com/s/files/1/0449/5225/6667/products/Avocado.progressive.jpg?v=1622045722" alt="" />
        </div>
      </div>

      {/* <Footer /> */}
     </div>
     

     



    </div>
  )
}

export default Home
