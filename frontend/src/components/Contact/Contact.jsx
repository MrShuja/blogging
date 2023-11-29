import React, { useState } from 'react'
import { json } from 'react-router-dom'

const Contact = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })
    const onChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        try{
            const data = json.formData;
            console.log(formData)
        }
        catch(err){
            console.log(err)
        }
        setFormData({
            name:"",
            email:"",
            message:""
        })
    }
    const {name, email, message} = formData;
    return (
        <div className="contact-us-container mt-5" style={{ backgroundImage: 'url("path-to-your-background-image.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h2 className="section-heading mb-4">Contact Us</h2>
                <form onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" 
                        className="form-control" id="name" required 
                        name="name" value={name} onChange={onChange}
                        />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control"
                         id="email" required 
                         name="email" value={email} onChange={onChange}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" 
                    rows="4" name="message" value={message} onChange={onChange} required ></textarea>
                  </div>
                  <button className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Contact
