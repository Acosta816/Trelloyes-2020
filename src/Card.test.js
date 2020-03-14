import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('TestSuite: Card Component', ()=> {

    it('SMOKE: renders component without crashing', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<Card />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

    it('SNAPSHOT#1: renders the UI as expected compared to the saved shot', ()=> {
        const tree = renderer.create(<Card /> ).toJSON();

        expect(tree).toMatchSnapshot();
    })

})