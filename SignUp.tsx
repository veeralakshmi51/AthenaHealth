import React from "react";
import "./Login.css";
import { motion } from "framer-motion";
import signup from "../Athena-main/src/signin.png";
import { useNavigate } from "react-router-dom";
const SignUp: React.FC = () => {
const navigation=useNavigate();
 const handleSignUp=()=>{
    alert('register successfully');
 }
 
  return (
    <motion.div
      className="login-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
    >
      <div className="login-container">
        <div className="login-form">
          <img
            src={signup}
            alt="Signup Image"
            style={{ width: 300, height: 200, marginLeft: 60 }}
          />

          <h2>SignUp</h2>
          <form>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                required
                placeholder="Enter Email"
              />{" "}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                placeholder="Enter Username"
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
              />
            </div>
            <button type="submit" onClick={()=>handleSignUp()}>Signup</button>
            <div className="signup-form">
            <h3>Already have an account</h3><span onClick={()=>navigation(-1)}>Go back!</span> 
            
          </div>
          </form>
          
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
