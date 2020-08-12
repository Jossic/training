import React, { Component } from 'react';
import Personne from './components/Personne/Personne';
import Horloge from './containers/Horloge/Horloge';
import './App.css';

class App extends Component {


    state = {
        personnes: [
            {
                nom: "Jossic",
                age: 32,
                sexe: true
            },
            {
                nom: "Pauline",
                age: 30,
                sexe: false
            },
            {
                nom: "Harvey",
                age: 1,
                sexe: true
            }
        ]
    }

    render() {
        return (
            <>
                <Horloge />
                <Personne {...this.state.personnes[0]} />
                <Personne nom={this.state.personnes[1].nom} age={this.state.personnes[1].age} sexe={this.state.personnes[1].sexe} />
                <Personne nom={this.state.personnes[2].nom} age={this.state.personnes[2].age} sexe={this.state.personnes[2].sexe} />
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