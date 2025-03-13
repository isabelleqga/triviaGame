import React, { useState } from "react";
import CategoryWheel from "./components/CategoryWheel";
import QuestionList from "./components/QuestionList";
import Question from "./components/Question";
import "./App.css";
import questionsData from "./Questions.js";

function App() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleBack = () => {
    if (currentQuestion) {
      setCurrentQuestion(null);
    } else if (currentCategory) {
      setCurrentCategory(null);
    }
  };

  const handleAnswerQuestion = (category, question) => {
    // Mark the question as answered
    setAnsweredQuestions((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), question],
    }));
  };

  const getAvailableCategories = () => {
    return Object.keys(questionsData).filter((category) => {
      const answered = answeredQuestions[category] || [];
      return answered.length < questionsData[category].length;
    });
  };

  const getAvailableQuestions = (category) => {
    const answered = answeredQuestions[category] || [];
    return questionsData[category].filter(
      (question) => !answered.includes(question)
    );
  };

  return (
    <div className="App">
      {!currentCategory && !currentQuestion && (
        <CategoryWheel
          categories={getAvailableCategories()}
          onSelectCategory={setCurrentCategory}
        />
      )}
      {currentCategory && !currentQuestion && (
        <QuestionList
          questions={getAvailableQuestions(currentCategory)}
          onSelectQuestion={setCurrentQuestion}
          onBack={handleBack}
        />
      )}
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onBack={handleBack}
          onAnswer={() => handleAnswerQuestion(currentCategory, currentQuestion)}
        />
      )}
    </div>
  );
}

export default App;