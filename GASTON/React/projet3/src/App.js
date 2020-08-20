import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaysManager from './containers/PaysManager/PaysManager';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar/NavBar2';

function App() {
  return (
    <BrowserRouter>
      <Route path='/pays' exact component={NavBar} />
      <Route path='/admin' component={NavBar2} />
      <Route path='/' exact render={() => <h1>Page d'accueil</h1>} />
      <Route path='/pays' exact component={PaysManager} />
      <Route path='/admin' exact render={() => <h1>Page d'administration</h1>} />

    </BrowserRouter>
  );
}

export default App;
