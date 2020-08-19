import React, { Component } from 'react'
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Pays from './Pays/Pays'
import axios from 'axios';

export default class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false,
    }

    componentWillMount = () => {
        this.setState({ loading: true });
        axios.get('https://restcountries.eu/rest/v2/all')
            .then((res) => {
                const listePays = res.data.map((pays) => {
                    return {
                        nom: pays.name,
                        nomFr: pays.translations.fr,
                        capitale: pays.capital,
                        continent: pays.region,
                        population: pays.population,
                        monnaie: pays.currencies[0].name,
                        drapeau: pays.flag,
                    }
                })
                this.setState({
                    listePays,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false });
            })

    }

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
                {
                    this.state.loading
                        ? <div>Chargement en cours...</div>
                        : <div className="row no-gutters">
                            {this.state.listePays.map((pays) => {
                                return (
                                    <div className="col-4" key={pays.nom}>
                                        <Pays {...pays} />
                                    </div>
                                );
                            })}
                        </div>
                }

                <div>Pagination</div>
            </div>
        )
    }
}
