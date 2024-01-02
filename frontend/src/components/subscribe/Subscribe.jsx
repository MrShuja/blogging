
import React, { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";

const Subscribe = () => {
  const [userEmail, setEmail] = useState({
    email:""
  });

  const onChange=(e)=>{
    setEmail({...userEmail,[e.target.name]:e.target.value})
    }
  const handleSubscribe = async () => {
    try {
      await axios.post("http://localhost:8000/api/subscribe", userEmail);
      console.log("Subscription successful!");
      toast.success("Thank you, Subscribed", {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.error("Error subscribing:", error);
    }
  };
  const {email}=userEmail;
  return (
    <div className="container d-flex justify-content-center">
      <div className="subscribe-section">
        <h3>Subscribe Now</h3>
        <p>
          No Spam. Just the latest releases <br />
          and tips, interesting articles,and
          <br />
          exclusive interviews in your inbox
          <br />
          every week
        </p>
        <form onSubmit={handleSubscribe}>
        <div class="mx-5 col-sm-10">
          <label for="exampleInputEmail1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            name="email"
            value={email}
            onChange={onChange}
            placeholder="Email Adress"
            aria-describedby="emailHelp"
          />
          <div class="mx-5 col-sm-10">
          <button class="btn">Submit</button>
        </div>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
