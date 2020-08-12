import React from 'react';
import Titre from './components/titre/titre'


function App() {
  return (
    <div className="container">
      <Titre>Page listant les livres</Titre>
      <div>Livres</div>
      <button>Ajouter</button>
    </div>
  );
}

export default App;
