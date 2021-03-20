import React, { Component } from 'react';
import AddTodoForm from '../containers/AddToDoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Another Todo Box</h1>
        <AddTodoForm />
      </div>
    );
  }
}

export default App;
