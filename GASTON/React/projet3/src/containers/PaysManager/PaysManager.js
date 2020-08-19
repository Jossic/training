import React, { Component } from 'react'
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';

export default class PaysManager extends Component {
    render() {
        return (
            <div>
                <Titre> Liste des pays du monde</Titre>
                <Button type='btn-info'>Tous</Button>
                <Button type='btn-info'>Europe</Button>
                <Button type='btn-info'>Afrique</Button>
                <Button type='btn-info'>Asie</Button>
                <Button type='btn-info'>Amérique</Button>
                <Button type='btn-info'>Océanie</Button>
                <div>Pays</div>
                <div>Pagination</div>
            </div>
        )
    }
}
