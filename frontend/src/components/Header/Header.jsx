import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import { Link } from "react-router-dom";
import style from "./Header.css";


const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg sticky-top navbar-light ">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
          <Link className="nav-link text-dark">
            <h3>LogicLens</h3>
          </Link>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5 gap-5">
            <li class="nav-item">
              <Link
                class="nav-link "
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link " to="/blog">
                BLOGS
              </Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarScrollingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                CATEGORY
              </a>
              <ul
                class="dropdown-menu columns-3 "
                aria-labelledby="navbarScrollingDropdown"
              >
                <li>
                  <Link class="dropdown-item" to="#">
                  Programming Languages
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Web Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Mobile App Development
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Data Science and Analytics
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Cybersecurity
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Cloud Computing
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Networking
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Hardware and Gadgets
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Software Development Lifecycle
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Emerging Technologies
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  Tech News and Events
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                  IT Certifications and Training
                  </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                  <a class="dropdown-item" href="#">
                    ------------------
                  </a>
                </li>
              </ul>
            </li> */}
            <li class="nav-item">
                  <Link class="nav-link " to="/about">
                    ABOUT US
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link " to="/contact">
                    CONTACT
                  </Link>
                </li>
          </ul>
          <ul class="d-flex navbar-nav  mb-2 mb-lg-0 mr-0 gap-3">
            <li class="nav-item">
              <Link class="nav-link " to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link class="nav-link " to="/signup">
                SIGN_UP
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
