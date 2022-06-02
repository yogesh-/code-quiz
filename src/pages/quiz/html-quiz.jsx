import React from "react";
import { Navbar } from "../../components/nav/nav";
import { htmlQuestions } from "../../QuizDB/quizDb";

export const HtmlQuiz = () => {
  const questions = htmlQuestions;
  return (
    <>
      <Navbar />
      <div className="quiz-container">
        <h1>This is HTML quiz page</h1>
        {questions.map((item, id) => (
          <li key={id}>{item.question}</li>
        ))}
      </div>
    </>
  );
};
