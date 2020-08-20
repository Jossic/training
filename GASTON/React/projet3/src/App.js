import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import PaysManager from './containers/PaysManager/PaysManager';

function App() {
  return (
    <BrowserRouter>
      <Link to="/">Accueil</Link>
      <Link to="/pays">Pays</Link>
      <Route path='/' exact render={() => <h1>Page d'accueil</h1>} />
      <Route path='/pays' component={PaysManager} />

    </BrowserRouter>
  );
}

export default App;
