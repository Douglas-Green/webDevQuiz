/** @format */

import React from "react";

const Question = ({
  question,
  selectedOption,
  onOptionChange,
  onSubmit,
  checkAnswer,
  wrongAnswer,
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    checkAnswer();
    onSubmit(event);
  };

  if (!question) {
    return null;
  }

  return (
    <div className={`question-container ${wrongAnswer ? "shake" : ""}`}>
      <form onSubmit={handleSubmit}>
        <h2>{question?.question}</h2>
        {question.options.map((option, index) => (
          <div key={index}>
            <input
              type='radio'
              id={`option-${index}`}
              name='quizOption'
              checked={selectedOption === option}
              onChange={() => onOptionChange(option)}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        ))}
        <button type='submit'>Next</button>
      </form>
    </div>
  );
};

export default Question;
