import React, { Component } from 'react';
import '../styles/App.scss';
import Routes from '../routes';
import { Provider } from "react-redux";
import store from '../store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
