import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import history from './history';
import Auxiliar from './Componentes/auxiliar';
import configureStore from './redux/configureStore'
const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Auxiliar />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
