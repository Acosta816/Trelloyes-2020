import React from 'react';
import './Card.css';

//accepts props: title and content
function Card(props){
    console.log(props);

    return(
        <div className="Card">
            <button type="button">delete</button>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Card;