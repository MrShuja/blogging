import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';
import JoditEditor from 'jodit-react';
import css from './CreateBlog.css'


const CreateBlog = () => {
  const initialFormData = {
    title: '',
    content: '',
    category: '',
    image: null,
  };
    const [formData, setFormData] = useState(initialFormData);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
      const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
      };
      
  // Handle Jodit Editor content change
  const handleEditorChange = (value) => {
    setFormData({ ...formData, content: value });
  };
    
    
      const handleSubmit =async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        const postData = new FormData();
          postData.append('title', formData.title);
          postData.append('content', formData.content);
          postData.append('category', formData.category);
          postData.append('image', formData.image);
        // to send the data into database through axios
        try {
          const response = await axios.post('http://localhost:8000/api/newBlogs', postData);
          console.log(response.data);
          console.log("data save successfully")
          setFormData(initialFormData);
          document.getElementById('image').value='';

           // after submit the form to display a toast for successfully submit
          toast.success('Data save successfully', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        } catch (error) {
          // console.error('Error:', error.response.data);
          toast.error('Something went wrong, data not saved', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }

      };
      const editorConfig = {
        buttons: 'bold,italic,fontsize,heading,color',
      };
      
  return (
    <div className="container mt-5">
          <div className="card w-60 mx-auto">
            <div className="card-header text-center">
              <h3>Upload New Blog</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                <label>
        Content:
        <JoditEditor
          value={formData.content}
          onChange={handleEditorChange}
          config={editorConfig}
        />
      </label>
                </div>
                <div className="mb-3">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="programming">Programming Languages</option>
                    <option value="web development">Web Development</option>
                    <option value="Artificial Intelligent">Artificial Inteligent</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="Data Science">Data Science</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Networking">Networking</option>
                    <option value="Computer Hardwares">Computer Hardwares</option>
                    <option value="Software development life cycle">Software development life cycle</option>
                    <option value="Emerging Technologies">Emerging Technologies</option>
                    <option value="Tech News and Events">Tech News and Events</option>
                    <option value="IT Certification and Training">IT Certification and Training</option>


                    {/* Add other categories here */}
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="image" className="form-label">
                    Upload Image
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

  )
}

export default CreateBlog
