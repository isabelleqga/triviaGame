import React, { useState } from "react";
import "./QuestionList.css";

function QuestionList({ category, questions, onSelectQuestion, onBack }) {
  const [filterLevel, setFilterLevel] = useState("all");

  const filteredQuestions =
    filterLevel === "all"
      ? questions
      : questions.filter((question) => question.level === filterLevel);

  return (
    <div className="question-list">
      <div className="sidebar">
        <h2>{category}</h2>
        <button className="back-button" onClick={onBack}>
          ◄◄
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
              value="1"
              checked={filterLevel === "1"}
              onChange={() => setFilterLevel("1")}
            />
            Fácil
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="2"
              checked={filterLevel === "2"}
              onChange={() => setFilterLevel("2")}
            />
            Médio
          </label>
          <label>
            <input
              type="radio"
              name="level"
              value="3"
              checked={filterLevel === "3"}
              onChange={() => setFilterLevel("3")}
            />
            Difícil
          </label>
        </div>
      </div>

      <div className="question-grid">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((question, index) => (
            <div key={index} className="question-card">
              <p>
                Nível <strong>{question.level}</strong>
              </p>
              <div className="question-wrapper">
                <p className="question-text">
                  <span>{question.question}</span>
                </p>
              </div>
              <button onClick={() => onSelectQuestion(question)}>Responder</button>
            </div>
          ))
        ) : (
          <div className="question-card no-questions">
            <p>Sem perguntas por aqui!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuestionList;