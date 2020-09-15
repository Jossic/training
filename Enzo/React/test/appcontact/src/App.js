import React from 'react';
import Titre from './components/Titres/Titre'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/layout/Header';

function App() {
  return (
    <>
      <Header />
      <Titre nom='Jossic' />
      <Titre nom='Pauline' />
    </>
  );
}

export default App;
