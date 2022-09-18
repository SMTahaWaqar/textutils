import React from "react";
import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes ,Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout (() => {
      setAlert(null)
    }, 1500)
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#16213E";
      // document.title = "TextUtils | Dark Mode"
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // document.title = "TextUtils | Light Mode"
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Navbar  title="Using Props" aboutText="About this website"/> */}
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
