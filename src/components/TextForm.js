import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log('Upper case was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Conveted To UPPERCASE","success")
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success")
    }

    const handleClrClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
  
    const handleOnChange = (event) => {
        // console.log('Handle on change')
        setText(event.target.value)
    }

    const handleCopy = (event) => {
      document.querySelector("textarea").select();
      document.execCommand('copy');
      props.showAlert("Text Copied","success")
  }


  const [text, setText] = useState("");
//   text = "taha" // Wrong way to chaange the state
//   setText("taha") //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==="light"?"black":"white"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="10" style={{backgroundColor: props.mode==="light"?"white":"#16213E", color: props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClrClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p></p>
        <p>{0.008*(text.split(" ").length)} minutes taked to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  );
}
