import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar(props) {
  let Mode = props.Mode;
  let Toggle = props.ToggleMode;
  const [Class1, setClass1] = useState("active");
  const [Class2, setClass2] = useState("");
  const [Class3, setClass3] = useState("");
  const active1 = () => {
    setClass1("active");
    setClass2("");
    setClass3("");
  };
  const active2 = () => {
    setClass2("active");
    setClass1("");
    setClass3("");
  };
  const active3 = () => {
    setClass3("active");
    setClass2("");
    setClass1("");
  };

  return (
    <div className={`navbar navbar-expand-lg navbar-${Mode} bg-${Mode}`}>
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li className="nav-item ">
            <Link
              className={`nav-link ${Class1} `}
              id="home"
              aria-current="page"
              to="/"
              onClick={active1}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${Class2} `}
              onClick={active2}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${Class3} `}
              onClick={active3}
              to="/E404"
            >
              Link
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">
              Disabled
            </Link>
          </li>
        </ul>
        <div className="form-check form-switch d-felx m-1 ">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="switch"
            defaultChecked={Mode === "dark"}
            onClick={Toggle}
          />
          <label className="form-check-label" htmlFor="switch">
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set Link Title",
};
