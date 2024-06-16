import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App'; // Ensure you have an App component defined in ./App.js

//>-->!  <a class="header__titulo" href="/"> Maria Renata Peterson</a>
//import animarTexto from './animarTexto';


const Index = () => {
    return (
 <>
      <App/>
 </>

    );
}
ReactDOM.render(<Index/>, document.querySelector('#root'));

// Ejecutamos las animaciones cuando termina de cargar.


