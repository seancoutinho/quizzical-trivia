import React from "react";

export default function Question(props) {
  const { answer, wrongAnswers, difficulty, question, Number } = props;
  const [chosenAnswers, setChosenAnswers] = React.useState([])

  function shuffle(arr) {
    for(let i=arr.length-1; i<0; i--) {
      const j = Math.floor(Math.random() * (i+1))
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

  function saveAnswer(e) {
    const answer = e.target.innerHTML
    setChosenAnswers(prevChosenAnswers => {
      return [...prevChosenAnswers, answer]
    })
  }

  console.log(chosenAnswers);

  const AnswerOptions = shuffle([answer, ...wrongAnswers]);

  var QuestionObject = {
    Options: AnswerOptions,
    Answer: answer,
    Difficulty: difficulty,
    Question: question,
    Index: Number + 1,
  };

  return (
    <div className="question" key={QuestionObject.Index}>
      <h1>
        <span>{QuestionObject.Index}</span>
        <span>. </span>
        {QuestionObject.Question}
      </h1>

      <div className="options">
        {QuestionObject.Options.map((option) => {
          return (
            <button className="btn-option"
            onClick={saveAnswer}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
