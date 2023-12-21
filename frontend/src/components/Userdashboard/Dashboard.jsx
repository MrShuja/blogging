import React, { useState } from "react";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    category: "programming",
    content: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handlePostBlog = () => {
    // Perform any necessary validation here

    // Create a new blog post object
    const newBlog = {
      title: formData.title,
      category: formData.category,
      content: formData.content,
      image: formData.image,
    };

    // Update the blogs state with the new blog
    setBlogs([...blogs, newBlog]);

    // Clear the form data
    setFormData({
      title: "",
      category: "programming",
      content: "",
      image: null,
    });
  };
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <h3>Welcome, [Username]</h3>
          <div>
            <h4>Your Blogs</h4>
            <div className="row" >
                <div className="col-6">
              {
              blogs.map((blog, index) => (
                <div class="card" style={{width: "18rem", height: "30rem"}} key={index}>
                  <img src={URL.createObjectURL(blog.image)} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{blog.title}</h5>
                    <p class="card-text">
                      {blog.content}
                    </p>
                    <a href="#" class="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
                // <li key={index}>
                //   <strong>{blog.title}</strong> - {blog.category}
                //   <p>{blog.content}</p>
                //   <img src={URL.createObjectURL(blog.image)} alt="Blog" style={{ maxWidth: '100%' }} />
                // </li>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Create New Blog</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
              />
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
              >
                <option value="programming">Programming</option>
                <option value="cloud storage">Cloud Storage</option>
                <option value="server">Server</option>
                <option value="client">Client</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Blog Content
              </label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={formData.content}
                onChange={handleInputChange}
              />
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
                onChange={handleImageChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlePostBlog}
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
