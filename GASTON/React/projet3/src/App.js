import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaysManager from './containers/PaysManager/PaysManager';
import NavBar from './components/NavBar/NavBar';
import UnPays from './containers/PaysManager/UnPays/UnPays';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Route path='/' exact render={() => <h1>Page d'accueil</h1>} />
      <Route path='/pays' exact component={PaysManager} />
      <Route path='/pays/:id' component={(props) => <UnPays nomPays={props.match.params.id} {...props} />} />

    </BrowserRouter>
  );
}

export default App;
