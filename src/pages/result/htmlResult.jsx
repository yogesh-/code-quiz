import React from "react";
import "./result.css";
import { Navbar } from "../../components/nav/nav";
import { useResult } from "../../context/resultContext/resultContext";
import { htmlQuestions } from "../../QuizDB/quizDb";

export const HtmlResult = () => {
  const { resultState } = useResult();

  const bg = (item) => {
    if (item.isCorrect === true) {
      return "correct";
    } else {
      return "";
    }
  };

  return (
    <>
      <Navbar />
      <p className="main-heading">Correct Answers</p>
      <div className="result-container">
        {htmlQuestions.map((item, index) => (
          <div className="outer-container">
            <div key={index} className="question">
              <p>{item.question}</p>
            </div>
            <div className="answer">
              {item.options.map((item, index) => {
                return (
                  <button key={index} className={`${bg(item)}`}>
                    {item.answerOption}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
