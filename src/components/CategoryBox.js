import React, { useState, useRef } from "react";
import "./CategoryBox.css";

function CategoryBox({ categories, onSelectCategory }) {
  const [spinning, setSpinning] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const boxRef = useRef(null);

  const spinBox = () => {
    if (spinning) return;
    setSpinning(true);
    setShowButton(false);

    const randomIndex = Math.floor(Math.random() * categories.length);
    const duration = 3000; // Smooth spin duration in milliseconds
    const stepCount = 50; // How many steps to take for the animation

    let counter = 0;
    const interval = setInterval(() => {
      if (counter < stepCount) {
        boxRef.current.style.transform = `translateY(-${(counter * 100) / stepCount}%)`;
        counter++;
      } else {
        clearInterval(interval);
        setSelectedCategory(categories[randomIndex]);
        setSpinning(false);
        setTimeout(() => setShowButton(true), 100);
      }
    }, duration / stepCount); // Adjust the interval for smoothness

    // Initially set the transform to smoothly transition
    boxRef.current.style.transition = `transform ${duration}ms ease-in-out`;
  };

  return (
    <div className="box-layout">
      <div className="right-side">
        <div className="box-container">
          <div className="box" ref={boxRef}>
            {categories.map((category, index) => (
              <div key={index} className="category-box-item">
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="left-side">
        <div className="controls-container">
          <button
            onClick={spinBox}
            disabled={spinning}
            className="spin-button"
          >
            {spinning ? "Spinning..." : "Spin the Box"}
          </button>

          {selectedCategory && !spinning && (
            <p className="selected-category">Selected: {selectedCategory}</p>
          )}

          {showButton && (
            <button
              className="proceed-button"
              onClick={() => onSelectCategory(selectedCategory)}
            >
              Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryBox;
