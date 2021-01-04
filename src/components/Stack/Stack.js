import React from 'react';
import './Stack.scss';
import StackItem from './StackItem/StackItem';
import displayLanguage from '../../translations/translations';

const Stack = () => {
    const text = displayLanguage();

    const stackItems = [
        {
            image: 'html5',
            name: 'HTML5'
        },
        {
            image: 'css3',
            name: 'CSS3'
        },
        {
            image: 'js',
            name: 'JavaScript ES6'
        },
        {
            image: 'sass',
            name: 'Sass/SCSS'
        },
        {
            image: 'react',
            name: 'React'
        },
        {
            image: 'redux',
            name: 'Redux'
        },
        {
            image: 'node',
            name: 'Node.js'
        },
        {
            image: 'express',
            name: 'Express'
        },
        {
            image: 'mongoDB',
            name: 'MongoDB'
        },
        {
            image: 'git',
            name: 'GIT & Github'
        },
        {
            image: 'npm',
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