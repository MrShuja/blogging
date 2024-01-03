import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogManagement = () => {
  const [blogData, setBlogData] = useState([]);

  //  blogs Fetching from backend API
  const fetchBlogs = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/blogs");
      setBlogData(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog post?");
    
    if (confirmDelete) {
      try {
        const response = await axios.delete(`http://localhost:8000/api/blogs/${id}`);
        console.log(response);

        if (response.status === 200) {
          // Blog deleted successfully, fetch updated blogs
          fetchBlogs();
        } else {
          console.log('Blog deletion failed.');
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleUpdate = (id) => {
    // Implement the update functionality here
    // You may navigate to a separate update page or use a modal
    // history.push(`/update-blog/${id}`);
    console.log(`Update blog with ID: ${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Blog Management</h2>
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Title</th>
            <th>Image</th>
            <th>Content</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='fs-5'>
          {blogData.map((blog, index) => (
            <tr key={blog._id}>
              <td>{index + 1}</td>
              <td>{blog.title}</td>
              <td>{blog.image}</td>
              <td>{blog.content}</td>
              <td>{blog.category}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm mr-2"
                  onClick={() => handleDelete(blog._id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleUpdate(blog._id)}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogManagement;
