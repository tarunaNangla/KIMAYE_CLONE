import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signin = () => {
    const navigate = useNavigate();
  return (
    <div className='bb' style={{paddingTop:"50px",paddingBottom:"50px"}}>
      
      <button style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px",width:"150px"}}onClick={()=>navigate("/login/signin")}>Signin</button>
      <button style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px",width:"150px"}}onClick={()=>navigate("/login/signup")}>New here</button>

    <br>
    </br>
    <br />
    <form action="">

    <input type="text" placeholder='Email address' />
    <br />
    <input type="text" placeholder='Password'/>
    <br />
    <p>Forget Password</p>
    <br />

    <button style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px",width:"150px"}} onClick={()=>navigate("/")}>Login</button>
    </form>
    </div>
  )
}

export default Signin
