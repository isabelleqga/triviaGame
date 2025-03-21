import React, { useState, useRef, useEffect } from "react";
import "./CategoryWheel.css";

function CategoryWheel({ categories, onSelectCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Track the selected category index
  const [spinning, setSpinning] = useState(false); // Track if the wheel is spinning
  const [showButton, setShowButton] = useState(false); // Show the "Proceed" button
  const intervalRef = useRef(null); // Ref to store the interval ID
  const targetIndexRef = useRef(null); // Ref to store the target index

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

    // Generate a random target index
    const randomIndex = Math.floor(Math.random() * categories.length);
    targetIndexRef.current = randomIndex;

    let intervalDuration = 50; // Start with a fast interval (50ms)
    const slowdownDuration = 5000; // Total duration of the spin (5 seconds)
    const startTime = Date.now();

    const spin = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = elapsedTime / slowdownDuration; // Progress from 0 to 1

      // Gradually increase the interval duration to slow down the spin
      intervalDuration = 50 + progress * 200; // Increase from 50ms to 250ms

      // Update the selected category
      setSelectedIndex((prevIndex) => (prevIndex + 1) % categories.length);

      // Stop spinning after the slowdown duration
      if (elapsedTime < slowdownDuration) {
        intervalRef.current = setTimeout(spin, intervalDuration);
      } else {
        // Ensure the wheel lands on the target index
        setSelectedIndex(targetIndexRef.current);
        setSpinning(false);
        setShowButton(true);
      }
    };

    // Start the spin
    spin();
  };

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
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
            {spinning ? "Rodando..." : "Sortear"}
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
                ►►
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryWheel;