import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import Auxiliar from './Componentes/auxiliar';
class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>

      <Auxiliar />
    </BrowserRouter>
    );
  }
}

export default App;
