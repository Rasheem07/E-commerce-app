import { items } from "./seo";
import "./nav.css";
import React from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useState} from "react";
import LoginPage from "./login";
import Signup from "./signup";
import { Link } from "react-router-dom";

function Nav() {
  const [displayLogin, setDisplayLogin] = useState("none");
  const [displaySignup, setDisplaySignup] = useState("none");
  
  function handleClickOnlogin() {
    if (displayLogin === "none")
     setDisplayLogin("block");
    if (displayLogin === "block") {
      setDisplayLogin("none");
    }
    setDisplaySignup("none")
  }

function handleClickOnSignup(){
  setDisplaySignup(displaySignup === "none"? "block" : "none")
  setDisplayLogin("none")
}

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and htmlFor the second the results.
    results.slice(1, 5);
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };
  
  const handleOnFocus = () => {
    console.log("Focused");
  };

  const css = {
    "--login-bg": "#f2f2f2",
    "--login-color": "#333",
    "--login-inner-bg": "#fff",
    "--login-input": "#57b846",
    "--login-input-bg": "#e6e6e6",
    "--login-input-placeholder": "#999999",
    "--login-btn": "#fff",
    "--login-btn-bg": "#57b846",
    "--login-btn-bg-focus": "none",
    "--login-btn-bg-hover": "#333",
    "--login-btn-bg-active": "#57b846",
  };

  const htmlFormatResult = (item) => {
    return (
      <>
        {/* <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span> */}
        <span
          style={{ display: "block", textAlign: "left", visibility: "visible" }}
        >
          {item.name}
        </span>
      </>
    );
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* <div className="container"> */}
        <a className="navbar-brand" href="#" id="brand">
          <img
            src="logo192.png"
            style={{ height: "30px", width: "30px" }}
            alt="React"
          />{" "}
          React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                id="active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/more">
                More
              </Link>
            </li>
          </ul>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            htmlFormatResult={htmlFormatResult}
            className="custom-autocomplete"
          />

          <div className="cta">
            <button
              className="btn"
              style={{ color: "#333333", background: "#f2f2f2" }}
              id="login"
              onClick={handleClickOnlogin}
            >
              Login
            </button>
            <button className="btn btn-primary" id="signup" onClick={handleClickOnSignup}>
              Sign Up
            </button>
          </div>
        </div>
      </nav>
      <div id="loginForm" className="absolute-center" style={{display: displayLogin}}>
      <LoginPage />
      </div>
      <div id="signupForm" className="absolute-center" style={{display: displaySignup}}>
      <Signup />
      </div>
    </>
  );

  
  
}

export default Nav;
