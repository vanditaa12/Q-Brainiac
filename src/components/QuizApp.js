import React, { useState, useEffect } from "react";
import Timer from "./Timer";
import { saveQuizAttempt } from "../db";
import "../styles/Quiz.css";

const quizData = [
  { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: 1 },
  { question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1 },
  { question: "Which of the following is primarily used for structuring web pages?", options: ["Python", "Java", "HTML", "C++"], answer: 2 },
  { question: "Which chemical symbol stands for Gold?", options: ["Au", "Gd", "Ag", "Pt"], answer: 0 },
  { question: "Which of these processes is not typically involved in refining petroleum?", options: ["Fractional distillation", "Cracking", "Polymerization", "Filtration"], answer: 3 },
  { question: "What is the value of 12 + 28?", options: ["30", "35", "40", "45"], answer: 2 },
  { question: "How many states are there in the United States?", options: ["48", "49", "50", "51"], answer: 2 },
  { question: "In which year was the Declaration of Independence signed?", options: ["1770", "1776", "1780", "1789"], answer: 1 },
  { question: "What is the value of pi rounded to the nearest integer?", options: ["2", "3", "4", "5"], answer: 1 },
  { question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?", options: ["100", "110", "120", "130"], answer: 2 }
];

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timer <= 0) handleNextQuestion();
  }, [timer]);

  const handleAnswer = (index) => {
    setSelectedAnswer(index);
    if (index === quizData[currentQuestion].answer) setScore(score + 1);
  };

  const handleNextQuestion = () => {
    saveQuizAttempt(quizData[currentQuestion].question, selectedAnswer);
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimer(30);
    } else {
      setQuizFinished(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Quiz</h1>
      {quizFinished ? (
        <div className="result-container">
          <h2>Quiz Finished!</h2>
          <p>Your Score: {score}/{quizData.length}</p>
          <h3>Correct Answers:</h3>
          <ul>
            {quizData.map((q, index) => (
              <li key={index}>{q.question} - <strong>{q.options[q.answer]}</strong></li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="question-container">
          <p>{quizData[currentQuestion].question}</p>
          <ul>
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input type="radio" name="answer" checked={selectedAnswer === index} onChange={() => handleAnswer(index)} />
                  {option}
                </label>
              </li>
            ))}
          </ul>
          <Timer timeLeft={timer} setTimeLeft={setTimer} />
          <button onClick={handleNextQuestion} disabled={selectedAnswer === null}>Next</button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
