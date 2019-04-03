import React, { Component } from 'react';
import './App.css';
import store from './ducks/store'
import {Provider} from 'react-redux'
import Board from './Components/Board/Board'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
        <Board/>
         Hello World
      </div>
      </Provider>
    );
  }
}

export default App;
