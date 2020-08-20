import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PaysManager from './containers/PaysManager/PaysManager';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Route path='/' exact render={() => <h1>Page d'accueil</h1>} />
      <Route path='/pays' exact component={PaysManager} />
      <Route path='/pays/:id' component={(props) => <h1>Page du pays {props.match.params.id}</h1>} />

    </BrowserRouter>
  );
}

export default App;
