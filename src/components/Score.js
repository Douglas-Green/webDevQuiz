/** @format */

import React from "react";

const Score = ({ score, onNextQuestion, resetQuiz }) => {
  return (
    <div>
      <h2>Score: {score}</h2>
      <button onClick={onNextQuestion}>Run it back?</button>
      <button onClick={resetQuiz}>Return to difficulty selection</button>
    </div>
  );
};

export default Score;
