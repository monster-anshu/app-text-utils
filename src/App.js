/* eslint-disable no-unused-vars */
import "./App.css";
import About from "./MyComponents/About";
import TextFrom from "./MyComponents/TextFrom";
import Navbar from "./MyComponents/Navbar";
import E404 from "./MyComponents/E404";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import Alert from "./MyComponents/Alert";

function App() {
  const [consRun, setconsRun] = useState();
  const constructor = () => {
    if (consRun) return;
    let x = JSON.parse(localStorage.getItem("theme"));
    if (x == null) {
      x = false;
    }
    setconsRun(true);
    return x ? "dark" : "light";
  };
  const [Mode, setMode] = useState(constructor);
  const [alert, setAlert] = useState(null);
  const height = {
    height: "60px",
  };
  const ToggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      showAlert("success ", "Dark Mode activated");
      localStorage.setItem("theme", JSON.stringify(true));
    } else if (Mode === "dark") {
      setMode("light");
      showAlert("success ", "Light Mode activated");
      localStorage.setItem("theme", JSON.stringify(false));
    }
  };

  if (Mode === "light") {
    document.body.style.background = "unset";
    document.body.style.color = "black";
  } else if (Mode === "dark") {
    document.body.style.background = "#261C2C";
    document.body.style.color = "white";
  }

  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    <Router>
      <Navbar Mode={Mode} ToggleMode={ToggleMode} />
      <div style={height}>
        <Alert Alert={alert}></Alert>
      </div>
      <Switch>
        <Route exact path="/">
          <TextFrom
            heading="Text Utils"
            Mode={Mode}
            Alert={showAlert}
          ></TextFrom>
        </Route>
        <Route exact path="/react-test/">
          <TextFrom
            heading="Text Utils"
            Mode={Mode}
            Alert={showAlert}
          ></TextFrom>
        </Route>
        <Route exact path="/react-first-app/">
          <TextFrom
            heading="Text Utils"
            Mode={Mode}
            Alert={showAlert}
          ></TextFrom>
        </Route>
        <Route exact path="/about">
          <About Mode={Mode} Alert={showAlert}></About>
        </Route>
        <Route exact path="/E404" Alert={alert}>
          <E404></E404>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
