import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom border-body 
        ${props.darkModeEnabled ? "navbar-dark bg-dark border-light" : "bg-body-tertiary border-dark"}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/"> {/* Replace a with link and href with to, for react router to work */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/"> {/* remove disabled to enable this link */}
                Blog
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch ${props.darkModeEnabled ? "text-light" : "text-dark"
              }`}
          >
            <input className="form-check-input" type="checkbox" role="switch" id="darkModeSwitch"
              onClick={props.toggleDarkMode} />
            <label className="form-check-label" htmlFor="darkModeSwitch">
              {props.darkModeEnabled ? 'Dark Mode' : 'Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//proptypes and defaultprops
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};
// Navbar.defaultProps = { aboutText: "About" };
