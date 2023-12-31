import React, { useState } from "react";
import { json, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import axios from "axios";
import { Navigate } from "react-router-dom";


const Signup = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      const onChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit=async(e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
          toast.warning("Your password and confirm password do not match!")
            }else {
              try{
                const data = await axios.post("http://localhost:8000/api/newUser", formData);
                //Toast message after successfully submitted
                toast.success('Signup Successfully', {
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
                navigate('/');
              }catch(err){
                console.log(err)
              }
            }
        
        setFormData({
            name:"",
            email:"",
            password:"",
            confirmPassword:""

        })
    }
    const {name, email, password, confirmPassword} = formData;

  return (
    <div
      className="contact-us-container mt-5"
      style={{ backgroundImage: 'url("path-to-your-background-image.jpg")' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h2 className="section-heading mb-4">SIGNUP</h2>
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                  name="name"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                //   className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  id="password"
                  name="password"
                  value={password}
                  onChange={onChange}
                  required
                />
                {/* {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )} */}
              </div>
              <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            // className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onChange}
            required
          /> <span id="pass"></span>
          {/* {errors.confirmPassword && (
            <div className="invalid-feedback">{errors.confirmPassword}</div>
          )} */}
        </div>

              <button className="btn ">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
