import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBlog,
  faInfoCircle,
  faEnvelope,
  faCode,
  faDatabase,
  faDesktop,
  faMobileAlt,
  faUser,
  faPhone,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import css from "./Footer.css";

const Footer = () => {
  return (
    <footer
      className=" text-light p-4 m-3 footer"
      style={{ background: "#13274F" }}
    >
      <div className="container">
        <div className="row">
          <h1 className="mt-5 mb-5">LogicLens</h1>
          <hr />

          <div className="col-md-3 col-sm-6">
            <ul className="list-unstyled">
              <h5>Quick Links</h5>
              <li>
                <FontAwesomeIcon icon={faHome} /> <a href="/">Home</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faBlog} /> <a href="/blogs">Blogs</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faInfoCircle} />{" "}
                <a href="/about">About Us</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="list-unstyled">
              <h5>IT Topics</h5>
              <li>
                <FontAwesomeIcon icon={faCode} /> <a href="#">Programming</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDatabase} /> <a href="#">Databases</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} />{" "}
                <a href="#">Web Development</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faMobileAlt} />{" "}
                <a href="#">Mobile Development</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h5>Developer</h5>
              <li>
                <FontAwesomeIcon icon={faUser} /> <a>Shuja Bin Rehmat</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} />{" "}
                <a>Full Stack Developer (MERN)</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul>
              <h5>Get In Touch</h5>
              <li className="list-unstyled">
                <FontAwesomeIcon icon={faPhone} /> 03115060422
              </li>
              <li className="list-unstyled">
                <FontAwesomeIcon icon={faBriefcase} />{" "}
                <a href="https://shuja-react-portfolio.netlify.app/">
                  Click to visit my Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
     
      <div className="text-center mt-3 mt-5">
        <p>&copy; 2023 New Company</p>
      </div>
    </footer>
  );
};

export default Footer;
