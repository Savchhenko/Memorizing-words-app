import React from 'react';
import ReactDom from 'react-dom';

// const el = React.createElement(
//     'h1', //элемент, который ъотим отобразить
//     null, //свойства данного элемента
//     'Hello World' //хначение элемента
// );

// const el = (
//     <>
//         <h1>Hello World</h1>
//     </>
// );

//чтобы создать компонент, достаточно создать функцию, которая возвращает реакт-элемент:
const AppList = () => {
    return  (
        <ul>
            <li>My first list</li>
            <li>My second list</li>
        </ul>
    );
}

const AppHeader = () => <h1>Hello World!</h1>;

const App = () => {
    return (
        <>
            <AppHeader />
            <AppList />
            <AppHeader />
            <AppList />
        </>  
    );
}

ReactDom.render(<App />, document.getElementById('root'));