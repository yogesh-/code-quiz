import React from "react";
import "./quiz.css";
import { Navbar } from "../../components/nav/nav";
import { htmlQuestions } from "../../QuizDB/quizDb";
import { useState } from "react";

export const HtmlQuiz = () => {
  const questions = htmlQuestions;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

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
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <h1>HTML Quiz</h1>
        <div className="outer-container">
          {showScore ? (
            <div className="show-score">
              {" "}
              <p>You scored {score} out of 5</p>
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
        </div>
      </div>
    </>
  );
};
