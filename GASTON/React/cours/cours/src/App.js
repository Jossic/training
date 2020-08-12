import React, { Component } from 'react';
import Personne from './components/Personne/Personne';
import Horloge from './containers/Horloge/Horloge';
import './App.css';

class App extends Component {
    render() {
        return (
            <>
                <Horloge />
                <Personne nom="Jossic" age="32" sexe="Homme" />
                <Personne nom="Pauline" age="30" sexe="Femme" />
                <Personne nom="Harvey" age="1" sexe="Homme" />
            </>
        );
    }
}







// function App() {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <p>Je m'appelle Jossic !</p>
//         </div>
//     );
// }

//  idem

// function App() {
//     return (
//         [
//             <h1>Hello</h1>,
//             <p>Je m'appelle Jossic !</p>
//         ]
//     );
// }

// Idem aussi

// function App() {
//     return (
//         <Fragment>
//             <h1>Hello</h1>
//             <p>Je m'appelle Jossic !</p>
//         </Fragment>
//     );
// }

// Encore idem
// Meilleur méthode (la plus à jour)

// function App() {
//     return (
//         <>
//             <h1>Hello</h1>
//             <p>Je m'appelle Jossic !</p>
//         </>
//     );
// }



export default App;