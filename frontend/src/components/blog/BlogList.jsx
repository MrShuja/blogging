import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import Footer from "../Footer/Footer";
import Spin from "../loader/Spin";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loader,setLoader]=useState(true)

  useEffect(() => {
    // Fetch blogs from your backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs"); // Replace with your actual API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
      setLoader(false);
    };

    fetchBlogs();
  }, []);

  return (
   <div className="container-fluid mt-5">
     <div className="container">
      <div className="row">
      {loader ? <Spin/> :null}
        {blogs.map((blog) => (
          <div key={blog._id} className="col-md-4 mb-4">
            <div className="card">
              {blog.image && (
                <img
                  src={`http://localhost:8000/upload/${blog.image}`}
                  className="card-img-top"
                  alt="Blog"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
              <h5 className="card-title fw-bold">{blog.title}</h5>
                <p
                  className="card-text"
                  style={{ maxHeight: "7.2em", overflow: "hidden" }}
                >
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </p>
                <Link to={`/blog/${blog._id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </div>
  );
};

export default Blog;
