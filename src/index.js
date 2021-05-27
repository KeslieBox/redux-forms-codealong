import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import manageTodo from './reducers/manageTodo';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// create the store using createStore
// this calls createStore which invokes manageTodo
// step 1, then manageTodo
let store = createStore(manageTodo,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// step 4
ReactDOM.render(
  // pass the store into the Provider
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
