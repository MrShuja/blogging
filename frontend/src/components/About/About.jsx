import React from 'react'
import style from './About.css'
import Footer from '../Footer/Footer';
import Subscribe from '../subscribe/Subscribe';

const About = () => {
    return (
      <>
        <div className="about-us-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto text-center">
                <h2 className="section-heading mb-4">About Us</h2>
                <p className="text-muted">
                  Welcome to our IT-focused world! We are passionate about technology and dedicated to providing innovative solutions for your business.
                </p>
                <p className="text-muted">
                  Our team of experts is committed to delivering cutting-edge IT services and support. Whether you need software development, cybersecurity, or IT consulting, we've got you covered.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4">
              {/* Bootstrap social media icons */}
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-twitter mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
            </div>
            
        </div>
        <Subscribe />
        <Footer />
        </>
      );
}

export default About
