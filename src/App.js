import React from 'react';
import List from './List';
import './App.css';

class App extends React.Component {

  render() {
    console.log(this.props.store);

    const myCards= this.props.store.allCards;
    console.log(myCards);

    const listsArray = this.props.store.lists;
    const myLists = listsArray.map(list=> {
      return(
        <List id={list.id} header={list.header} cards={list.cardIds.map(letter=> myCards[letter])} />
      )
    })

    return(
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes 2020!</h1>
        </header>
        <div className="App-list">App is rendering:{myLists}</div>
      </main>
    )
  }

}

export default App;
