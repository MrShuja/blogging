import React, { useEffect, useState } from 'react'
import axios from 'axios';
const UserManagement = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from your backend API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs"); // Replace with your actual API endpoint
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  
  return (
    <div>
     <h1>this is user UserManagement</h1>
    </div>
  )
}

export default UserManagement
