import React, { Component } from 'react';
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Personnage from './Personnage';


export default class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 3,
            force: 10,
            agi: 10,
            intel: 10
        },
        nbPointDispo: 7
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

    render() {
        return (
            <div className="container">
                <Titre>Créateur de personnage</Titre>
                <Personnage
                    {...this.state.personnage}
                    precedente={this.handleImagePrecedente}
                    suivante={this.handleImageSuivante}
                    nbPointDispo={this.state.nbPointDispo}
                />
                <p>Armes</p>
                <Button type="btn-danger w-50" clic={() => console.log('Reinitialisation')}>Réinitialiser</Button>
                <Button type="btn-success w-50" clic={() => console.log('Création')}>Créer</Button>
            </div>
        )
    }
}
