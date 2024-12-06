import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [numbers, setNumbers] = useState("");

  let wordCount = text.split(" ").length;

  //very imp: when using forms, textarea, remember it
  const handleOnChange = (event) => {
    console.log("onChange Event");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked. Value: " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase','success')
  };

  const handleLowClick = () => {
    console.log("Lowercase was clicked. Value: " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase','success')
  };

  const handleNumberExtraction = () => {
    console.log("Numbers Extracted");
    let extractedNumbers = text.replace(/[^0-9]/g, ''); //using regex
    setNumbers(extractedNumbers); 
    props.showAlert('Numbers Extracted','success')
  };

  const handleClearText = () => {
    console.log("Text is cleared");
    setText("");
    setNumbers("");
    props.showAlert('Text Cleared','success')
  };
  return (
    <>
      <div className="container my-2">
        <h2>Enter The Text to Analyze Below</h2>
        <div className="mb-3">
          <textarea className="form-control border-2" id="myTextBox" rows="8" 
          placeholder="Enter Text Here" value={text} onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleNumberExtraction}
          >
            Extract Numbers
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearText}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h2>Your Text Summary</h2>
        <p>
          {wordCount} words, {text.length} characters in your text.
        </p>
        {/* acc to net,  avg reading time is 125 words per minute */}
        <p>
          {" "}
          {((1 / 125) * wordCount).toFixed(2)} minutes reading time for above
          text.
        </p>
        <h3>Extracted Numbers</h3>
        <p>{numbers.length > 0 ? numbers : "None"}</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Show"}</p>
      </div>
    </>
  );
}
