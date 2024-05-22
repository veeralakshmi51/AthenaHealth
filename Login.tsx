import React, { useState } from "react";
import "./Login.css";
import { motion} from "framer-motion";
import login from "../Athena-main/src/logo.png";
import { useNavigate } from "react-router-dom";
import TokenProvider from "./src/token/token";
const Login: React.FC = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
const navigation=useNavigate();
const [accesstoken,setAccessToken]=useState<string|null>(null);
  const handleSignUp=()=>{
    alert('clicked');
    navigation('/signup')
  }
  const changePassword=()=>{
    navigation('/forgotpassword');
  }
 const  handleLogin=()=>{
  
    const token=localStorage.getItem('accesstoken');
    setAccessToken(token);
    console.log('token',token);
    
   if(username=='User' && password=='user123'){
    navigation('/sidebar')
   }
   else{
    alert('Invalid User');
   }
  }
  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 20, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="login-container">
        <div className="login-form">
          <img
            src={login}
            alt="Login Image"
            style={{ width: 300, height: 250, marginLeft: 60 }}
          />

          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Username"
                value={username}
                onChange={(event)=>setUsername(event.target.value)}
              />{" "}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="Enter Password"
                value={password}
                onChange={(event)=>setPassword(event.target.value)}
              />
            </div>
            <button type="submit" onClick={handleLogin}>Login</button>
            <div className="signup-form">
            <h5 style={{margin:20,alignItems:'flex-start'}}>Don't have an account</h5><span onClick={()=>handleSignUp()}> click here!</span> 
            
          </div>
          <div className="signup-form">
          <span onClick={()=>changePassword()}>Forgot Password</span>
          </div>
          </form>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
