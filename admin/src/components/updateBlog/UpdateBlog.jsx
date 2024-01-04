// UpdateBlog.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBlog = ({ blogId, onClose, onUpdate }) => {
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [updatedImage, setUpdatedImage] = useState('');
  const [updatedContent, setUpdatedContent] = useState('');
  const [updatedCategory, setUpdatedCategory] = useState('');

  useEffect(() => {
    // Fetch the existing blog data using the blogId
    const fetchBlogById = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/blogs/${blogId}`);
        const blog = response.data;
        setUpdatedTitle(blog.title);
        setUpdatedImage(blog.image);
        setUpdatedContent(blog.content);
        setUpdatedCategory(blog.category);
      } catch (error) {
        console.error('Error fetching blog by ID:', error);
      }
    };

    fetchBlogById();
  }, [blogId]);

  const handleUpdate = async () => {
    try {
      const updatedBlog = {
        title: updatedTitle,
        image: updatedImage,
        content: updatedContent,
        category: updatedCategory,
      };

      await axios.put(`http://localhost:8000/api/blogs/${blogId}`, updatedBlog);
      onUpdate(); // Refresh the blog list after update
      onClose(); // Close the update modal or navigate back
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  return (
    <div>
      {/* Your update form or modal content */}
      <label>Title:</label>
      <input type="text" value={updatedTitle} onChange={(e) => setUpdatedTitle(e.target.value)} />

      {/* Repeat similar input fields for other blog properties */}
      
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default UpdateBlog;
