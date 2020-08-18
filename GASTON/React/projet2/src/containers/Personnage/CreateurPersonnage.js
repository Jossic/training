import React, { Component } from 'react';
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Personnage from './Personnage';


export default class CreateurPersonnage extends Component {
    state = {
        personnage: {
            image: 1,
            force: 0,
            agi: 0,
            intel: 0
        }
    }
    render() {
        return (
            <div className="container">
                <Titre>Créateur de personnage</Titre>
                <Personnage {...this.state.personnage} />
                <p>Armes</p>
                <Button type="btn-danger w-50" clic={() => console.log('Reinitialisation')}>Réinitialiser</Button>
                <Button type="btn-success w-50" clic={() => console.log('Création')}>Créer</Button>
            </div>
        )
    }
}
