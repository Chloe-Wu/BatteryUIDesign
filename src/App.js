import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [progressWidth, setProgressWidth] = useState(50);

  useEffect(() => {
    const formatedWidth = `${progressWidth}%`;
    setNumText(formatedWidth);
  }, [progressWidth]);

  const setNumText = (width) => {
    const numElement = document.querySelector(".num");
    if (numElement) {
      numElement.textContent = width;
    }
  };

  const handleWidthChange = (e) => {
    const newWidth = parseInt(e.target.value, 10);
    setProgressWidth(newWidth);
  };

  const getProgressBarColor = (width) => {
    if (width <= 20) {
      return "#D75E61";
    }
    if (width <= 50) {
      return "#E4B866";
    } else {
      return "green";
    }
  };

  const progressBarColor = getProgressBarColor(progressWidth);

  return (
    <div className="App">
      <h1>Battery UI</h1>
      <div className="container">
        <div className="text">battery:</div>
        <div className="barContainer">
          <div
            className="uiborder"
            style={{ borderColor: `${progressBarColor}` }}
          >
            <div
              className="progress"
              style={{
                width: `${progressWidth}%`,
                backgroundColor: `${progressBarColor}`
              }}
            ></div>
          </div>
          <div
            className="num"
            style={{ color: `${progressBarColor}` }}
          >{`${progressWidth}%`}</div>
        </div>
      </div>
      <div className="inputContainer">
        <label htmlFor="progressInput">Set your battery percentage:</label>
        <input
          id="progressInput"
          type="number"
          value={progressWidth}
          min="0"
          max="100"
          onChange={handleWidthChange}
        />
      </div>
    </div>
  );
}
