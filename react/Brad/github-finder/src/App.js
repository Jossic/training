import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    const name = 'Jossic';
    const loading = false;
    const showName = true;

    return (
      <>
        {loading ? <h4>Loading...</h4> : <h1>Hello {showName && name}</h1>}

      </>
    );
  }

}

export default App;
