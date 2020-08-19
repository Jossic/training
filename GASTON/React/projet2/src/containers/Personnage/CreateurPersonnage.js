import React, { Component } from 'react';
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Personnage from './Personnage';
import Armes from '../Armes/Armes'


export default class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 3,
            force: 3,
            agi: 3,
            intel: 3
        },
        nbPointDispo: 7,
        armes: ["epee", "fleau", "arc", "hache", "appel", "griffe", "guide", "pike"]
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

    render() {
        return (
            <div className="container">
                <Titre>Créateur de personnage</Titre>
                <Personnage
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nbPointDispo={this.state.nbPointDispo}
                    enleverPoint={this.handleCaracMoins}
                    ajouterPoint={this.handleCaracPlus}
                />
                <Armes listeArmes={this.state.armes} />
                <Button type="btn-danger w-50" clic={() => console.log('Reinitialisation')}>Réinitialiser</Button>
                <Button type="btn-success w-50" clic={() => console.log('Création')}>Créer</Button>
            </div>
        )
    }
}
