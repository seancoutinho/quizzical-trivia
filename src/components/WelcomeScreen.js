import React from 'react';

export default function WelcomeScreen(props) {
    return (
        <div className="WelcomeScreen">
            <h1 className='title'>Quizzical</h1>
            <p className='instructions'>This is a Quiz Trivia to test you knowledge on Computers! Good luck</p>
            <button onClick={props.startGame}className="btn start-quiz">Start quiz</button>
        </div>
    )
}