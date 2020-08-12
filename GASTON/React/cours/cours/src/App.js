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

    anniversaireHandler = (numPersonne) => {
        const newPersonnes = { ...this.state.personnes[numPersonne] }
        newPersonnes.age++;

        const newTab = [...this.state.personnes];
        newTab[numPersonne] = newPersonnes;
        this.setState({ personnes: newTab });
    }

    render() {
        return (
            <>
                {/* <button onClick={this.anniversaireHandler}>Anniversaire</button> */}
                <Horloge />
                <Personne {...this.state.personnes[0]} click={() => this.anniversaireHandler(0)} />
                <Personne {...this.state.personnes[1]} click={() => this.anniversaireHandler(1)} />
                <Personne {...this.state.personnes[2]} click={() => this.anniversaireHandler(2)} />
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