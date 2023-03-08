import React from 'react';

export default function Question(props) {
    
    console.log(props.question);
    return (
        <div className='question'>
            {props.question}
            <div className="options">
                
            </div>
        </div>
    )
    
}

