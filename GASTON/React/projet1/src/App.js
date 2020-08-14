import React, { Component } from 'react';
import Titre from './components/titre/TitreH1'
import Button from './components/Buttons/Button'
import Livres from './containers/Livres/Livres ';


class App extends Component {
  state = {
    ajoutLivre: false
  }

  handleClicAjoutLivre = () => {
    this.setState((oldState, props) => {
      return { ajoutLivre: !oldState.ajoutLivre }
    })
  }

  render() {

    return (
      <div className="container" >
        <Titre>Page listant les livres</Titre>
        <Livres ajoutLivre={this.state.ajoutLivre} />
        <Button type="btn-success" css="w-100" clic={this.handleClicAjoutLivre}>
          {!this.state.ajoutLivre ? "Ajouter" : "Fermer l'ajout"}
        </Button>
      </div>
    );
  }

}

export default App;
