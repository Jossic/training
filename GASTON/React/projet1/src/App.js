import React from 'react';
import Titre from './components/titre/TitreH1'
import Button from './components/Buttons/Button'
import Livres from './containers/Livres/Livres ';


function App() {
  return (
    <div className="container">
      <Titre>Page listant les livres</Titre>
      <Livres />
      <Button type="btn-success" css="w-100" clic={() => console.log('Ajout')}>Ajouter</Button>
    </div>
  );
}

export default App;
