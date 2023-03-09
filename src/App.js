import "./App.css";

import React, { useEffect, useState } from "react";

import Quiz from "./components/Quiz";
import WelcomeScreen from "./components/WelcomeScreen";
import axios from "axios";

function App() {
  const [quizStart, setQuizStart] = useState(false);
  const [questionsData, setQuestionsData] = useState("");

  function startGame() {
    setQuizStart(true);
  }

  const getData = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => {
        setQuestionsData(response.data.results);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {quizStart ? (
        <Quiz questions={questionsData} />
      ) : (
        <WelcomeScreen startGame={startGame} />
      )}
    </div>
  );
}

export default App;
