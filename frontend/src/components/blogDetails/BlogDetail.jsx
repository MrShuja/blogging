import { useState, useEffect } from "react"
import React  from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';
import css from './BlogDetail.css'
import Footer from "../Footer/Footer";

const BlogDetail = () => {
    const [blogDetail, setBlogDetail] = useState({})
    const params = useParams();
    const fetchBlogs = async ()=>{
        const response = await axios.get(`http://localhost:8000/api/${params.id}`)
        const data = await response.data;
        console.log("API Data:", data);
        setBlogDetail(data)
        // Update the state based on the 'blog' property
     setBlogDetail({
        id: data.blog._id,
        title: data.blog.title,
        content: data.blog.content,
        image: data.blog.image,
    });
    }
    useEffect(()=>{
        fetchBlogs();
    }, [] );
     
    const addNewLines = (text) => {
      if (!text) {
        return null;
      }
  
      // Split the text based on double slashes '\\'
      const lines = text.split('\\');
  
      // Map over the array and add a new line after each double slash
      const formattedText = lines.map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
  
      return formattedText;
    };
  
  
  return (
    <div className="container-fluid">
      <div className="container">
      <div className="row">
      <div className="col d-flex justify-content-center my-5">
        <img src={`http://localhost:8000/upload/${blogDetail.image}`} className="img-fluid mx-auto" alt="Responsive" />
      </div>
      <div>
        <h1 className="bg-success p-2 text-center">{blogDetail.title}</h1>
      </div>
        <div className="fs-1 text-break mt-5" id="content">
          <p>{addNewLines(blogDetail.content)}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default BlogDetail
