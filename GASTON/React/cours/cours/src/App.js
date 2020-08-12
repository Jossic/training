import React, { Component } from 'react';
import Personne from './components/Personne/Personne';
import Horloge from './containers/Horloge/Horloge';
import './App.css';
import AgePersonne from './components/Personne/AgePersonne/AgePersonne'

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
            },
            {
                nom: "Helynn",
                age: -1,
                sexe: false
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
                <Horloge />
                {this.state.personnes.map((personne, index) => {
                    return (
                        <Personne {...personne} click={() => this.anniversaireHandler(index)}>
                            <AgePersonne age={personne.age} />
                        </Personne>
                    )
                })}

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