import React from 'react';
import ReactDOM from 'react-dom';

// создадим react-элемент:
// 1ый аргумент - элемент, который хотим отобразить
// 2ой аргумент - свойства этого h1 элемента (его данные/props)
// 3ий аргумент - значение элемента

// const el = React.createElement(
//   'h1', 
//   null, 
//   'Hello World, React.js!',
// );

const el = <h1>Hello World, React.js!</h1> // JSX 
//JSX компилируется babel'ем в скрипт, который приведен выше

//покажем этот элемент на странице с помощью библиотеки ReactDOM:
// 1ый аргумент - это сам элемент, который хотим показать
// 2ой аргумент - место, где хотим его отобразить

ReactDOM.render(el, document.getElementById('root'));

