import React, { useState } from "react";
import "./QuestionList.css";

function QuestionList({ questions, onSelectQuestion, onBack }) {
  const [filterLevel, setFilterLevel] = useState("all");

  const filteredQuestions =
    filterLevel === "all"
      ? questions
      : questions.filter((question) => question.level === filterLevel);

  return (
    <div className="question-list">
      <div className="sidebar">
        <h2>Questions</h2>
        <button className="back-button" onClick={onBack}>
          Back to Categories
        </button>
        <div className="filter-options">
          <label>
            <input
              type="radio"
              name="level"
              value="all"
              checked={filterLevel === "all"}
              onChange={() => setFilterLevel("all")}
            />
            Tudo
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="Fácil"
              checked={filterLevel === "Fácil"}
              onChange={() => setFilterLevel("Fácil")}
            />
            Fácil
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="Médio"
              checked={filterLevel === "Médio"}
              onChange={() => setFilterLevel("Médio")}
            />
            Médio
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="Difícil"
              checked={filterLevel === "Difícil"}
              onChange={() => setFilterLevel("Difícil")}
            />
            Difícil
          </label>
        </div>
      </div>

      <div className="question-grid">
        {filteredQuestions.map((question, index) => (
          <div key={index} className="question-card">
            <p>
              <strong>Level:</strong> {question.level}
            </p>
            <div className="question-wrapper">
              <p className="question-text">
                <span>{question.question}</span>
              </p>
            </div>
            <button onClick={() => onSelectQuestion(question)}>Answer</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
