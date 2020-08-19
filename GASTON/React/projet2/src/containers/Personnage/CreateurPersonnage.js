import React, { Component } from 'react';
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Personnage from './Personnage';
import Armes from '../Armes/Armes';
import axios from 'axios';


export default class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 3,
            force: 3,
            agi: 3,
            intel: 3,
            arme: null,
        },
        nbPointDispo: 7,
        armes: null,
        loading: false,
        nom: "",
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        axios.get('https://creaperso-67a43.firebaseio.com/armes.json')
            .then((res) => {
                const armesArray = Object.values(res.data);
                this.setState({
                    armes: armesArray,
                    loading: false,
                });
            })
            .catch(error => {
                console.log("error");
                this.setState({
                    loading: false,
                });
            })
    }

    handleImagePrecedente = () => {
        this.setState((oldState) => {
            const newPerso = { ...oldState.personnage }
            if (oldState.personnage.image <= 1) {
                newPerso.image = 11;
            }
            else {
                newPerso.image--;
            }
            return { personnage: newPerso };
        })
    }

    handleImageSuivante = () => {
        this.setState((oldState) => {
            const newPerso = { ...oldState.personnage }
            if (oldState.personnage.image >= 11) {
                newPerso.image = 1;
            }
            else {
                newPerso.image++;
            }
            return { personnage: newPerso };
        })
    }

    handleCaracPlus = (carac) => {
        this.setState((oldState, props) => {
            if (oldState.personnage[carac] >= 20 || oldState.nbPointDispo <= 0) return null;
            const newPointCarac = oldState.personnage[carac] + 1;
            const newPerso = { ...oldState.personnage };
            const newNbPointsDispo = oldState.nbPointDispo - 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage: newPerso,
                nbPointDispo: newNbPointsDispo,
            }
        })
    }

    handleCaracMoins = (carac) => {
        this.setState((oldState, props) => {
            if (oldState.personnage[carac] <= 0 || oldState.nbPointDispo <= 0) return null;
            const newPointCarac = oldState.personnage[carac] - 1;
            const newPerso = { ...oldState.personnage };
            const newNbPointsDispo = oldState.nbPointDispo + 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage: newPerso,
                nbPointDispo: newNbPointsDispo,
            }
        })
    }

    handleChangeArme = (arme) => {
        const newPerso = { ...this.state.personnage };
        newPerso.arme = arme;
        this.setState({ personnage: newPerso })
    }

    handleValidation = () => {
        this.setState({ loading: true });
        const player = {
            perso: { ...this.state.personnage },
            nom: this.state.nom,
        };
        axios.post('https://creaperso-67a43.firebaseio.com/persos.json', player)
            .then((res) => {
                console.log(res)
                this.setState({ loading: false });
                this.handleReinitialisation();
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false });
            })
    }

    handleReinitialisation = () => {
        this.setState({
            personnage: {
                image: 3,
                force: 3,
                agi: 3,
                intel: 3,
                arme: null,
            },
            nbPointDispo: 7,
            armes: ["epee", "fleau", "arc", "hache", "appel", "griffe", "guide", "pike"],
            nom: "",
        });
    }

    render() {
        return (
            <div className="container">
                <Titre>Créateur de personnage</Titre>
                <div className="form-group">
                    <label htmlFor="inputName">Votre nom</label>
                    <input type="text" className="form-control" id="inputName" value={this.state.nom} onChange={e => this.setState({ nom: e.target.value })} />
                </div>
                <Personnage
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nbPointDispo={this.state.nbPointDispo}
                    enleverPoint={this.handleCaracMoins}
                    ajouterPoint={this.handleCaracPlus}
                />
                {this.state.loading && <div>Chargement...</div>}
                {this.state.armes &&
                    <Armes
                        listeArmes={this.state.armes}
                        changeArme={this.handleChangeArme}
                        currentArme={this.state.personnage.arme}
                    />
                }
                <Button type="btn-danger w-50" clic={this.handleReinitialisation}>Réinitialiser</Button>
                <Button type="btn-success w-50" clic={this.handleValidation}>Créer</Button>
            </div>
        )
    }
}
