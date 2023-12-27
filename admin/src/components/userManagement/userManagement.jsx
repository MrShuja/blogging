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
      <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">category</th>
      <th scope="col">Image</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
    {
        blogs.map((data)=>{
            return(
                <>
                <tr>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.image}</td>
                <td><button className="btn btn-danger" >Delete</button></td>

                {/* <td><button className="btn btn-danger" onClick={()=>handleDelete(data._id)}>Delete</button></td> */}
                <td><button className="btn btn-warning">Edit</button></td>
              </tr>
              
              </>
            )
        })
    }
  </tbody>
</table>
    </div>
  )
}

export default UserManagement
