import React from 'react';
import Titre from './components/titre/TitreH1'
import Button from './components/Buttons/Button'


function App() {
  return (
    <div className="container">
      <Titre>Page listant les livres</Titre>
      <div>Livres</div>
      <Button type="Ajouter" clic={() => console.log('Ajout')}></Button>
      <Button type="Modifier" clic={() => console.log('Modification')}></Button>
      <Button type="Supprimer" clic={() => console.log('Suppression')}></Button>
    </div>
  );
}

export default App;
