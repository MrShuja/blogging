import { useState, useEffect, useRef } from "react"
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
        <div className="fs-1 mt-5" id="content">
        
        <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
                
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default BlogDetail
