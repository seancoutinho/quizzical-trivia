import React from "react";

export default function Question(props) {
  const { answer, wrongAnswers, difficulty, question, Number } = props;
  const [chosenAnswer, setChosenAnswer] = React.useState([])

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const AnswerOptions = shuffle([answer, ...wrongAnswers]);
  
  var QuestionObject = {
    Options: AnswerOptions,
    Answer: answer,
    Difficulty: difficulty,
    Question: question,
    Index: Number + 1,
  };

  function saveAnswer(e) {
    
    const answer = e.target.innerHTML
    setChosenAnswer(answer)
    if (answer === QuestionObject.Answer) {
      
    } else {
      console.log("wrong");
    }
  }

  return (
    <div className="question" key={QuestionObject.Index}>
      <h1>
        <span>{QuestionObject.Index}</span>
        <span>. </span>
        {QuestionObject.Question}
      </h1>
      <div className="options">
        {QuestionObject.Options.map(option => {
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
