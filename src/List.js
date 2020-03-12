import React from 'react';
import './List.css';
import Card from './Card';

//accepts props: header and cards
function List(props){
    console.log(props);

    const cardsArray = props.cards;
    console.log(cardsArray);

    const myCards = cardsArray.map(card=> {
        return(
            <Card id={card.id} title={card.title} content={card.content} />
        )
    })

    return(
        <section className="List">
            <header className="List-header">
                {props.header}
            </header>
            <div className="List-cards">
                {myCards}
                <button type="button" class="List-add-button">
              + Add Random Card
            </button>
            </div>
        </section>
    )
}

export default List;