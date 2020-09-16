import React from 'react';
import Titre from './components/Titres/Titre'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/layout/Header';

import { Liste } from './components/Liste';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Liste />
      </div>
    </>
  );
}

export default App;
