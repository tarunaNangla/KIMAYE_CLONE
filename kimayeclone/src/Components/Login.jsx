import React from 'react'
import { Routes,Route } from 'react-router-dom';
// import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'
import Signin from './Signin';
import Signup from './Signup';
const Login = () => {
    const navigate = useNavigate();
  return (
    <div>
        login
      

      <button  onClick={()=>navigate("/login/signin")}>Sign in</button> <button onClick={()=>navigate("/login/signup")}>New here</button>
       <Routes>
       <Route path="/login/signin" element={<Signin/>}></Route>
        <Route path="/login/signup" element={<Signup/>}></Route>
       </Routes>
    </div>
  )
}

export default Login
