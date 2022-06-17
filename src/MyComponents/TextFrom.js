/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

// let i = 0;
// let arr: [] = [];
// const setValue = () => {
//   let str = getValue("myText");
//   console.log(str);
//   arr.push({
//     active: true,
//     text: str,
//   });
//   console.log(arr);
// };
// const getValue = (id) => {
//   return document.getElementById(id).value;
// };
export default function TextFrom(props) {
  const Mode = props.Mode;
  const Alert = props.Alert;

  const light = {
    background: "",
    color: "black",
  };
  const dark = {
    background: "rgb(27 27 28)",
    color: "white",
  };
  const [text, setText] = useState("");

  const HandelOnChange = (event) => {
    setText(event.target.value);
  };

  const HandelOnUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    Alert("success", "converted to upper case");
  };

  const HandelOnLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    Alert("success", "converted to lower case");
  };

  const HandelOnResetClick = () => {
    setText("");
    Alert("success", "text cleared");
  };

  return (
    <div className="container">
      <div className="mb-3">
        <h2>{props.heading}</h2>
        <textarea
          placeholder="Enter text here"
          value={text}
          style={Mode === "dark" ? dark : light}
          className="form-control"
          id="inputID"
          rows="8"
          onChange={HandelOnChange}
        ></textarea>
      </div>
      <button
        disabled={text.length === 0}
        className="btn btn-primary m-1"
        onClick={HandelOnUpClick}
      >
        Upper Case
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary m-1"
        onClick={HandelOnLowClick}
      >
        Lower Case
      </button>
      <button
        disabled={text.length === 0}
        className="btn btn-primary m-1"
        onClick={HandelOnResetClick}
      >
        Reset
      </button>
      <div className="container my-3">
        <h4>Your Text sumarry</h4>
        <p>
          {
            text.split(/\s/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>{" "}
        <p>
          {text.split(/\s/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes to read
        </p>
        <h4>Preview</h4>
        <p>{text ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}

TextFrom.propTypes = {
  heading: PropTypes.string.isRequired,
  Mode: PropTypes.string.isRequired,
};

TextFrom.defaultProps = {
  heading: "Set a Heading",
};
