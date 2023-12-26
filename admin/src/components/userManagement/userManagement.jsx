// import React from 'react'
// import { useState } from 'react';
// import axios from 'axios'
// const userManagement = () => {
//   const [blogDetail, setBlogDetail] = useState({})
//     const params = useParams();
//     const fetchBlogs = async ()=>{
//         const response = await axios.get(`http://localhost:8000/api/${params.id}`)
//         const data = await response.data;
//         console.log("API Data:", data);
//         setBlogDetail(data)
//         // Update the state based on the 'blog' property
//      setBlogDetail({
//         id: data.blog._id,
//         title: data.blog.title,
//         content: data.blog.content,
//         image: data.blog.image,
//     });
//     }
//     useEffect(()=>{
//         fetchBlogs();
//     }, [] );
//   return (
//     <div>
//       <h1>this is userManagement</h1>
//     </div>
//   )
// }

// export default userManagement
