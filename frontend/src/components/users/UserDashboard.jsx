import React from 'react'
import CreateBlog from '../createBlog/CreateBlog'

const UserDashboard = () => {
  return (
    <div className="container mt-5">
        <div className="row">
            <div>
                <h2>Welcome to the Dashboard </h2>
                <hr></hr>
            </div>
            <div>
                <CreateBlog />
            </div>

        </div>
      
    </div>
  )
}

export default UserDashboard
