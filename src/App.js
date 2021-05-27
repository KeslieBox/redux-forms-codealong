import React, { Component } from 'react';
import CreateTodo from './components/todos/CreateTodo'

// step 2
// creates child component: CreateTodo
class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateTodo />
      </div>
    );
  }
}
export default App;
