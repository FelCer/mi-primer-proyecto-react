import React from 'react';
// Este se encarga de todo lo que se haga en el elemento, a empujar al navegador.
import ReactDOM from 'react-dom';
// Elementos creados  
import HelloWorld from './components/HelloWorld'

ReactDOM.render(
    <HelloWorld></HelloWorld>,
    document.getElementById(app)
);