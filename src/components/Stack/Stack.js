import React from 'react';
import './Stack.scss';
import StackItem from './StackItem/StackItem';
import displayLanguage from '../../translations/translations';

const Stack = () => {
    const text = displayLanguage();

    const stackItems = [
        {
            image: 'html5.png',
            name: 'HTML5'
        },
        {
            image: 'css3.png',
            name: 'CSS3'
        },
        {
            image: 'js.png',
            name: 'JavaScript ES6'
        },
        {
            image: 'sass.png',
            name: 'Sass/SCSS'
        },
        {
            image: 'react.png',
            name: 'React'
        },
        {
            image: 'redux.png',
            name: 'Redux'
        },
        {
            image: 'node.png',
            name: 'Node.js'
        },
        {
            image: 'expressjs.png',
            name: 'Express'
        },
        {
            image: 'mongoDB.png',
            name: 'MongoDB'
        },
        {
            image: 'git.png',
            name: 'GIT & Github'
        },
        {
            image: 'npm.png',
            name: 'npm'
        },
    ];

    const stackItemsGenerator = () => stackItems.map(el => <StackItem 
                                                            key={el.image} 
                                                            image={el.image} 
                                                            name={el.name}/>);

    return(
        <div className="stack">
            <div className="stack__view">
                <p className="stack__mainLabel">{text.Stack_mainLabel}</p>
                <div className="stack__logos">
                    {stackItemsGenerator()}
                </div>
            </div>
        </div>
    );
}

export default Stack;