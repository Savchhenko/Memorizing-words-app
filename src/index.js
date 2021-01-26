import React from 'react';
import ReactDom from 'react-dom';

const AppList = () => {

    const items = ['Item1', 'Item2', 'Item3'];
    const firstItem = <li>Item 0</li>

    return  (
        <ul>
            {firstItem}
            { items.map(item => <li>{item}</li>) }
            <li>{items[0]}</li> 
            <li>{items[1]}</li>
        </ul>
    );
}

const AppHeader = () => <h1>Hello World!</h1>;

const AppInput = () => {
    const placeholder = "Type text...";
    return (
        <label>
            <input placeholder={placeholder} />
        </label>
    );
}

const App = () => {
    return (
        <>
            <AppHeader />
            <AppInput />
            <AppList />
            <AppHeader />
            <AppList />
        </>  
    );
}

ReactDom.render(<App />, document.getElementById('root'));