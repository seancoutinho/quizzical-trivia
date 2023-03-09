import Question from "./Question";
import React from "react";

export default function Quiz(props) {
  const Questions = props.questions;
  return (
    <div className="quiz-page">
      <h1>Questions</h1>
      {Questions?.map((question, index) => {
        return (
          <div key={index}>
            <Question
              Number={index}
              question={question.question}
              answer={question.correct_answer}
              wrongAnswers={question.incorrect_answers}
              difficulty={question.difficulty}
            />
          </div>
        );
      })}
    </div>
  );
}
