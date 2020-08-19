import React, { Component } from 'react';
import CreateurPersonnage from './containers/Personnage/CreateurPersonnage';
import ListePersonnage from './containers/ListePersonnage/ListePersonnage';

class App extends Component {
  state = {
    refresh: false,
  }

  handleRefresh = () => {
    this.setState((oldState) => {
      return {
        refresh: !oldState.refresh
      }
    });
  }
  render() {
    return (
      <>
        <CreateurPersonnage refresh={this.handleRefresh} />
        <ListePersonnage refresh={this.state.refresh} />
      </>
    );
  }
}

export default App;
