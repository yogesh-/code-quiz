import React from "react";
import { Navbar } from "../../components/nav/nav";
import { CssQuestions } from "../../QuizDB/quizDb";
import { useState } from "react";
import "./quiz.css";
import { Link } from "react-router-dom";

export const CssQuiz = () => {
  const questions = CssQuestions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [rules, setRules] = useState(true);

  const questionHandler = (isRight) => {
    if (isRight === true) {
      setScore(score + 1);
    }

    var nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const rulesHandler = () => {
    setRules(false);
  };
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <h1>CSS Quiz</h1>
        <div className="outer-container">
          {showScore ? (
            <div className="show-score">
              {" "}
              <p>You scored {score} out of 5</p>
              <Link to="/css-result">
                <button>Check Correct Answers</button>
              </Link>
            </div>
          ) : (
            <>
              {rules ? (
                <div className="show-rules">
                  <p>
                    <ul>
                      <li>Please do not cheat </li>
                      <li>Complete the quiz within the time</li>
                      <li>The quiz will be in english language only </li>
                      <li>This is not a group quiz, please attempt solo</li>
                    </ul>
                  </p>
                  <button onClick={rulesHandler}>Start Quiz Now</button>
                </div>
              ) : (
                <>
                  <div className="question">
                    <p>Question {currentQuestion + 1} of 5</p>

                    <p>{questions[currentQuestion].question}</p>
                  </div>
                  <div className="answer">
                    {questions[currentQuestion].options.map((item) => (
                      <button onClick={() => questionHandler(item.isCorrect)}>
                        {item.answerOption}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};
