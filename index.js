import React from 'react';
import ReactDOM  from 'react-dom/client';

// ReactElememnt = object => render => html element

const heading=React.createElement('h1',{id:'heading'},'By Akshay Saini🚀');

const jsxHeading = <h1 id="heading">Namaste React By JSX</h1>

//jsx => React.createElement => object => Html element <= BABEL

const root =ReactDOM.createRoot(document.getElementById('root'));

root.render(jsxHeading);