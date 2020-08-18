import React from 'react';
import Button from './components/Buttons/Button';
import Titre from './components/Titres/Titre';

function App() {
  return (
    <div className="App">
      <Titre>Créateur de personnage</Titre>
      <p>Personnage</p>
      <p>Armes</p>
      <Button type="btn-danger">Réinitialiser</Button>
      <Button type="btn-success">Créer</Button>
    </div>
  );
}

export default App;
