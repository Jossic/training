import React, { Component } from 'react';
import Personne from './components/Personne/Personne';
import Horloge from './containers/Horloge/Horloge';
import './App.css';
import AgePersonne from './components/Personne/AgePersonne/AgePersonne'

class App extends Component {


    state = {
        personnes: [
            {
                id: 1,
                nom: "Jossic",
                age: 32,
                sexe: true
            },
            {
                id: 2,
                nom: "Pauline",
                age: 30,
                sexe: false
            },
            {
                id: 3,
                nom: "Harvey",
                age: 1,
                sexe: true
            },
            {
                id: 4,
                nom: "Helynn",
                age: -1,
                sexe: false
            }
        ]
    }

    anniversaireHandler = (id) => {
        const numCasePersonne = this.state.personnes.findIndex(e => {
            return e.id === id;
        })

        const newPersonnes = { ...this.state.personnes[numCasePersonne] };
        newPersonnes.age++;

        const newTab = [...this.state.personnes];
        newTab[numCasePersonne] = newPersonnes;
        this.setState({ personnes: newTab });
    }

    render() {
        return (
            <>
                <Horloge />
                {this.state.personnes.map((personne) => {
                    return (
                        <Personne key={personne.id} {...personne} click={() => this.anniversaireHandler(personne.id)}>
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