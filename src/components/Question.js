import React, { useState, useEffect } from "react";
import "./Question.css";

function Question({ question, onBack, onAnswer }) {
  const getTimerDuration = (level) => {
    switch (level) {
      case "1":
        return 5000; 
      case "2":
        return 10000; 
      case "3":
        return 15000; 
      default:
        return 10000; 
    }
  };

  const [timeLeft, setTimeLeft] = useState(getTimerDuration(question.level) / 1000); 
  const [milliseconds, setMilliseconds] = useState(0);
  const [timerRunning, setTimerRunning] = useState(true);

  useEffect(() => {
    if (!timerRunning) return; 

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = getTimerDuration(question.level) - elapsed; // Adjust based on level

      if (remaining <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
        setMilliseconds(0);
        setTimerRunning(false); // Stop the timer
        onAnswer(); // Mark the question as answered
      } else {
        setTimeLeft(Math.floor(remaining / 1000));
        setMilliseconds(Math.floor((remaining % 1000) / 10)); // Show 2-digit milliseconds
      }
    }, 10); // Update every 10ms

    return () => clearInterval(timer);
  }, [timerRunning, question.level, onAnswer]);

  return (
    <div className="question-screen">
      <h1>{question.question}</h1>
      {timerRunning ? (
        <h2 className="timer">
          {timeLeft}.{milliseconds.toString().padStart(2, "0")}
        </h2>
      ) : (
          <p className="answer">
            {question.answer}
          </p>
      )}
      
      <button className="back-button" onClick={onBack}>
      ◄◄
      </button>
    </div>
  );
}

export default Question;