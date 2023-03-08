import React, {useState} from 'react'
import './App.css';
import WelcomeScreen from './components/WelcomeScreen';
import Quiz from './components/Quiz';


function App() {

  const [quizStart, setQuizStart] = useState(false)

  function startGame() {
    setQuizStart(true)
  }

  return (
    <div className="App">
      {quizStart ? <Quiz /> :
      <WelcomeScreen startGame={startGame}/>}
    </div>
  );
}

export default App;
