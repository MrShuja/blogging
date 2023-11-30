import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog, faInfoCircle, faEnvelope, faCode, faDatabase, faDesktop, faMobileAlt, faUser, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const gradientStyle = {
        background: 'hsla(205, 46%, 10%, 1)',
        background: 'linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)',
        background: '-moz-linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)',
        background: '-webkit-linear-gradient(90deg, hsla(205, 46%, 10%, 1) 0%, hsla(191, 28%, 23%, 1) 50%, hsla(207, 41%, 27%, 1) 100%)',
        filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#0E1C26", endColorstr="#2A454B", GradientType=1 )',
      };
  return (
    <footer className=" text-light p-4" style={gradientStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faHome} /> <a href="/">Home</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faBlog} /> <a href="/blogs">Blogs</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInfoCircle} /> <a href="/about">About Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>IT Topics</h5>
            <ul className="list-unstyled">
              <li>
                <FontAwesomeIcon icon={faCode} /> Programming
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} /> Databases
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} /> Web Development
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} /> Mobile Development
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Developer</h5>
            <li className='list-unstyled'>
                <FontAwesomeIcon icon={faUser} /> Shuja Bin Rehmat
            </li>
            <li className="list-unstyled">
                <FontAwesomeIcon icon={faCode} /> Full Stack Developer (MERN)
            </li>
            </div>
            <div className="col-md-3">
                <h5>Get In Touch</h5>
                <li className='list-unstyled'>
                    <FontAwesomeIcon icon={faPhone} /> 03115060422
                </li>
                <li className="list-unstyled">
                    <FontAwesomeIcon icon={faBriefcase} /> <a href="https://shuja-react-portfolio.netlify.app/" >Click to visit my Portfolio</a>
                </li>
            </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <p>&copy; 2023 New Company</p>
      </div>
    </footer>
  )
}

export default Footer
