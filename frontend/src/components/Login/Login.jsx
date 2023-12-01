import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {axios} from 'axios';

// this the command 
const Login = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:""
      })
      // this is navigation code 
      const navigate=useNavigate();
    const onChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
    // this is also a command
    // the submit action will perform
    const onSubmit=async(e)=>{
    e.preventDefault();
    try{
    //   const data = await axios.post("http://localhost:9998/signup/login",formData)
    //   const accessToken=localStorage.setItem("accessToken",data.data.token)
    //   const token = localStorage.getItem("accessToken")
    //   if(token){
    //     navigate("/userDashboard")
    //   }
    //   console.log(data)
    // cocole the data
    console.log(formData);
    }
    catch(err){
      console.log(err)
    }
    
    setFormData({
      email:"",
      password:""
    })
    
    toast.success('Login Successfully', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    setTimeout(()=>{
    },4000)
    
    }
    const {email,password}=formData;
  return (
    <div className="container mt-5">
    <h2 className="mb-4">Sign In</h2>
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Enter your password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
      </div>
      <button className="btn btn-primary">
        Sign In
      </button>
    </form>
  </div>

  )
}

export default Login
