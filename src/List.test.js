import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('TestSuite: List Component', ()=> {

    it('SMOKE: renders component withour crashing', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<List />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it('SNAPSHOT#01: renders UI as expected compared to the saved shot', ()=> {
        const tree= renderer.create(<List id={list.id} header={list.header} cards={list.cardIds.map(letter=> myCards[letter])} />).toJSON();

        expect(tree).toMatchSnapshot();
    })

})