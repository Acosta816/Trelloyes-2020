import React from 'react';
import './Card.css';

//accepts props: title and content and id
function Card(props){
    console.log(props);

    return(
        <div className="Card">
            <button type="button" onClick={()=>{props.cbDeleteCard(props.id)}}>delete</button>
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