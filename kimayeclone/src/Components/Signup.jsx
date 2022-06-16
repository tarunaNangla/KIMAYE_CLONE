import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className='bb' style={{paddingTop:"50px",paddingBottom:"50px"}}>
       <button style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px",width:"150px"}} onClick={()=>navigate("/login/signin")}>Signin</button>
      <button style={{backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px",width:"150px"}} onClick={()=>navigate("/login/signup")}>New here</button>


    <br/>

    <form action="">
        <input type="text" placeholder='First Name' /><br/>
        <input type="text" placeholder='Last Name' name="" id="" /><br/>
        <input type="text" placeholder='Email Address' name="" id="" /><br/>
        <input type="password" placeholder='password' />
        <br />
        <button style={{width:"150px",backgroundColor:"gery",borderColor:"gery",borderRadius:"1px",fontSize:"20px"}} onClick={()=>navigate("/login/signin")}>Register</button>
    </form>
    
    </div>
  )
}

export default Signup
