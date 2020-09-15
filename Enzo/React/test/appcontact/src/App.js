import React from 'react';
import Titre from './components/Titres/Titre'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/layout/Header';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Contact />
        <Contact />
        <Contact />
      </div>
    </>
  );
}

export default App;
