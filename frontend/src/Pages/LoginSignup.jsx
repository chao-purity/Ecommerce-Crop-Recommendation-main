import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })
  const changeHandler = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const login = async () => {
    console.log("login executed", formData);
    let responseData;
  
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Ensure formData is used instead of FormData
      });
  
      responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.');
    }
  };
  

  const signup = async () => {
    console.log("sign executed", formData);
    let responseData;
  
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Ensure formData is used instead of FormData
      });
  
      responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace('/');
      } else {
        alert(responseData.errors);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };
  

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign up"?
          <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler}type="email" placeholder='Email Address' />
          <input name='password' value={formData.password} onChange={changeHandler}type="password" placeholder='Password' />
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState('Login')}}>Login here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState('Sign up')}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy </p>
        </div>
      </div>
    </div>
  )
}
