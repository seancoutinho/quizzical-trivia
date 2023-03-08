import React, { useState, useEffect } from "react";
import "./App.css";
import WelcomeScreen from "./components/WelcomeScreen";
import Quiz from "./components/Quiz";
import axios from "axios";

function App() {
  const [quizStart, setQuizStart] = useState(false);
  const [data, setData] = useState("");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple"
      )
      .then((response) => {
        const data = response.data.results;
        localStorage.setItem("DATA", JSON.stringify(data));
      });
  }, []);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("DATA")))
  }, [])

  console.log(data);
  function startGame() {
    setQuizStart(true);
    setQuestions(data.map(dataPoint => {
      return dataPoint.question
    }))
    }

  return (
    <div className="App">
      {quizStart ? <Quiz questions={questions}/> : <WelcomeScreen startGame={startGame} />}
    </div>
  );
}

export default App;
