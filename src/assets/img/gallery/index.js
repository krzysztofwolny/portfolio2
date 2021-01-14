/*
import html5 from './html5.png';
import css3 from './css3.png';
import js from './js.png';
import sass from './sass.png';
import react from './react.png';
import redux from './redux.png';
import node from './node.png';
import express from './expressjs.png';
import mongoDB from './mongoDB.png';
import git from './git.png';
import npm from './npm.png';

export { html5, css3, js, sass, react, redux, node, express, mongoDB, git, npm, };
*/


const importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => images[item.replace('./', '')] = r(item) );
    //const imagesNames = Object.keys(images);
    return images;
}

export const images = importAllImages(require.context('./', false, /\.(png|jpe?g|svg)$/));

