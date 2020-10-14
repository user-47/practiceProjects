import React from 'react';


function TheJoker (props) {
    return (
        <div className="Jokes">
            <h3 style={{display: !props.jokes.question && "none"}} >Question: {props.jokes.question}</h3>
            <h5 style={{backgroundColor: "#ff0000"}}>Punchline: {props.jokes.punchline}</h5>


        </div>

    )
}


export default TheJoker;