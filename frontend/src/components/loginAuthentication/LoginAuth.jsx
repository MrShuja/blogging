
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import CreateBlog from '../createBlog/CreateBlog';

const LoginAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    // Check if the user is logged in
    useEffect(() => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }, []);
  
    const handleLogout = () => {
      // Clear the token from localStorage on logout
      localStorage.removeItem('accessToken');
      setIsLoggedIn(false);
      navigate('/');
    };
  
    return (
      <div>
            <li>
              {isLoggedIn ? (
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              ) : (
                <a href="/login">Login</a>
              )}
            </li>
            <li>
              {isLoggedIn && <a href="/create-blog">Create Blog</a>}
            </li>
        <div>
          {/* Conditionally render Login or CreateBlog component */}
          {isLoggedIn ? <CreateBlog /> : <Login />}
        </div>
      </div>
    );
}

export default LoginAuth;
