import React from "react";

export default function Question(props) {
  const { answer, wrongAnswers, difficulty, question, Number } = props;

  const AnswerOptions = [answer, ...wrongAnswers];

  var QuestionObject = {
    Options: AnswerOptions,
    Answer: answer,
    Difficulty: difficulty,
    Question: question,
    Index: Number + 1,
  };

  const checkAnswer = (chosenAnswer) => {
    if (chosenAnswer === QuestionObject.Answer) {
      console.log("Correct Answer");
    } else {
      console.log("Wrong Answer");
    }
  };

  return (
    <div className="question" key={QuestionObject.Index}>
      <h1>
        <span>{QuestionObject.Index}</span>

        {QuestionObject.Question}
      </h1>

      <div className="options">
        {QuestionObject.Options.map((option) => {
          return (
            <button
              onClick={() => {
                checkAnswer(option);
              }}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
