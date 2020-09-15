import React, { useState } from 'react';
import Titre from './Titre'

const App = () => {

  const [nom, setNom] = useState({ nom1: 'Jossic', nom2: 'Pauline' });


  return (
    <>
      <Titre nom={nom.nom1} />
      <Titre nom={nom.nom2} />
    </>
  );
};

export default App;
