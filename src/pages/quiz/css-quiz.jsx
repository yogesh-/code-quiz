import React from "react";
import { Navbar } from "../../components/nav/nav";
import { CssQuestions } from "../../QuizDB/quizDb";

export const CssQuiz = () => {
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <h1>This is CSS quiz page</h1>
      </div>
    </>
  );
};
