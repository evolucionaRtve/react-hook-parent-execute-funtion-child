import React, { Component } from 'react';
import { render } from 'react-dom';
import Navbar from './Navbar';
import './style.css';

const App = function () {

  let funcChild = '';
  const functionPadre = (functionHijo) => {
    console.log('ejecuto funcion padre')
    funcChild = functionHijo;
  }
  const click = () => {
    funcChild()
  }

  return (
    <div>
      <Navbar functionPadre={functionPadre} />
      <p onClick={() => click() }>Click</p>
      <div  className="content">pepe</div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
