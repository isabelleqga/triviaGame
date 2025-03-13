import React, { useState, useRef, useEffect } from "react";
import "./CategoryWheel.css";

function CategoryWheel({ categories, onSelectCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected category index
  const [spinning, setSpinning] = useState(false); // Track if the wheel is spinning
  const [showButton, setShowButton] = useState(false); // Show the "Proceed" button
  const intervalRef = useRef(null); // Ref to store the interval ID
  const timeoutRef = useRef(null); // Ref to store the timeout ID

  // Function to get the category for a specific box
  const getCategoryForBox = (boxIndex) => {
    const totalCategories = categories.length;
    // Calculate the category index for the box
    const categoryIndex = (selectedIndex + boxIndex - 2 + totalCategories) % totalCategories;
    return categories[categoryIndex];
  };

  // Function to start the spinning animation
  const startSpinning = () => {
    setSpinning(true);
    setShowButton(false);

    let intervalDuration = 10; // Start with a fast interval (100ms)
    const slowdownDuration = 5000; // Total duration of the spin (10 seconds)
    const startTime = Date.now();

    const spin = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = elapsedTime / slowdownDuration; // Progress from 0 to 1

      // Gradually increase the interval duration to slow down the spin
      intervalDuration = 50 + progress * 150; // Increase from 100ms to 1000ms

      // Update the selected category
      setSelectedIndex((prevIndex) => (prevIndex + 1) % categories.length);

      // Stop spinning after the slowdown duration
      if (elapsedTime < slowdownDuration) {
        intervalRef.current = setTimeout(spin, intervalDuration);
      } else {
        setSpinning(false);
        setShowButton(true);
      }
    };

    // Start the spin
    spin();
  };

  // Cleanup the interval and timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="layout">
      <div className="right-side">
        <div className="container">
          {/* Render 5 boxes */}
          {[0, 1, 2, 3, 4].map((boxIndex) => (
            <div
              key={boxIndex}
              className={`box ${
                boxIndex === 2
                  ? "middle-box"
                  : boxIndex === 0 || boxIndex === 4
                  ? "edge-box"
                  : ""
              }`}
            >
              {getCategoryForBox(boxIndex)}
            </div>
          ))}
        </div>
      </div>
      <div className="left-side">
        <div className="controls-container">
          <button onClick={startSpinning} disabled={spinning} className="spin-button">
            {spinning ? "Spinning..." : "Spin the Wheel"}
          </button>

          {showButton && (
            <>
              <p className="selected-category">
                {categories[selectedIndex]}
              </p>
              <button
                className="proceed-button"
                onClick={() => onSelectCategory(categories[selectedIndex])}
              >
                Proceed
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryWheel;