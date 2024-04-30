/** @format */

import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Question from "./components/Question";
import Score from "./components/Score";
import "./App.css";
import NoviceQuestionBank from "./components/NoviceQuestionBank";
import BeginnerQuestionBank from "./components/BeginnerQuestionBank";
import Modal from "react-modal";

const App = () => {
  // State variables
  const [difficulty, setDifficulty] = useState(null); // difficulty level
  const [area, setArea] = useState(null); // tech stack area
  const [currentQuestion, setCurrentQuestion] = useState(0); // current question index
  const [selectedOption, setSelectedOption] = useState(""); // selected answer option
  const [score, setScore] = useState(0); // current score
  const [quizEnd, setQuizEnd] = useState(false); // quiz end flag
  const [questions, setQuestions] = useState([]); // question bank
  const [wrongAnswer, setWrongAnswer] = useState(false); // wrong answer flag
  const [modalIsOpen, setModalIsOpen] = useState(false); // modal open flag

  // Function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Reset quiz function
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setQuizEnd(false);
    setDifficulty(null);
    setArea(null);
    setScore(0);
  };

  // Handle area change function
  const handleAreaChange = event => {
    const area = event.target.value;
    setArea(area);
  };

  // Handle difficulty change function
  const handleDifficultyChange = event => {
    setDifficulty(event.target.value);
  };

  // Start quiz function
  const startQuiz = useCallback(() => {
    if (!difficulty || !area) {
      // If difficulty or area is not selected, open modal
      setModalIsOpen(true);
      return;
    }

    let quizQuestions = [];
    if (difficulty === "novice") {
      quizQuestions = NoviceQuestionBank;
    } else if (difficulty === "beginner") {
      quizQuestions = BeginnerQuestionBank;
    }

    if (area && area !== "ALL") {
      quizQuestions = quizQuestions.filter(question => question.area === area);
    }

    for (let question of quizQuestions) {
      question.options = shuffleArray([...question.options]);
    }

    setQuestions(quizQuestions);
  }, [difficulty, area]);

  // Effect to start quiz when difficulty and area are selected
  useEffect(() => {
    if (difficulty && area) {
      startQuiz();
    }
  }, [difficulty, area, startQuiz]);

  // Check answer function
  const checkAnswer = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1000);
    } else {
      setWrongAnswer(true);
      setScore(score > 200 ? score - 200 : 0);
    }
  };

  // Handle next question function
  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  // Handle option change function
  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  // Handle form submit function
  const handleFormSubmit = event => {
    event.preventDefault();
    checkAnswer();
    if (currentQuestion === 9) {
      setQuizEnd(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      handleNextQuestion();
    }
    setTimeout(() => {
      setWrongAnswer(false);
    }, 500);
  };

  // If difficulty or area is not selected, render select elements
  return (
    <div className='App d-flex flex-column align-items-center justify-content-center'>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel='Error Modal'
          className="modal-content">
          <h2>!!Error!!</h2>
          <p>
            Please select a DIFFICULTY and TECH STACK to study on then you may
            start quiz.
          </p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
      )}
      {!difficulty || !area ? (
        <div>
          <h1 className='app-title'>Web Dev Quiz App</h1>
          <div className='difficulty-area-container'>
            <div className='select-wrapper'>
              <select onChange={handleDifficultyChange}>
                <option value=''>Select difficulty</option>
                <option value='beginner'>Beginner</option>
                <option value='novice'>Novice</option>
              </select>
            </div>
            <div className='select-wrapper'>
              <select onChange={handleAreaChange}>
                <option value=''>Select Tech Stack</option>
                <option value='All Tech Stacks'>ALL</option>
                <option value='Git'>Git</option>
                <option value='JavaScript'>JavaScript</option>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='React'>React</option>
              </select>
            </div>
          </div>
          <button
            className='start-quiz-button'
            onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      ) : (
        <div>
          <h1 className='app-title'>Web Dev Quiz App</h1>
          {!quizEnd ? (
            <Question
              question={questions[currentQuestion]}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              onSubmit={handleFormSubmit}
              checkAnswer={checkAnswer}
              wrongAnswer={wrongAnswer}
            />
          ) : (
            <Score
              score={score}
              onNextQuestion={handleNextQuestion}
              resetQuiz={resetQuiz}
              className='score'
            />
          )}
        </div>
      )}
    </div>
  );
};
export default App;
