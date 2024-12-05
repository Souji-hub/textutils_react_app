import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg border-bottom border-body 
        ${props.darkModeEnabled ? "navbar-dark bg-dark border-light" : "bg-body-tertiary border-dark"}`} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.aboutText}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Blog
              </a>
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
