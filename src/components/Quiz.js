import React from 'react'
import Question from "./Question"

export default function Quiz(props) {
    return (
        <div className='quiz-page'>
            <Question question={props.questions[0]} options={props.options}/>
            <Question question={props.questions[1]} options={props.options}/>
            <Question question={props.questions[2]} options={props.options}/>
            <Question question={props.questions[3]} options={props.options}/>
            <Question question={props.questions[4]} options={props.options}/>
        </div>
    )
}