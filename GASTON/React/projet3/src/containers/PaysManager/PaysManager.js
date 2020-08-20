import React, { Component } from 'react'
import Titre from '../../components/Titres/Titre';
import Button from '../../components/Buttons/Button';
import Pays from './Pays/Pays'
import axios from 'axios';

export default class PaysManager extends Component {
    state = {
        listePays: [],
        loading: false,
        ContinentSelect: null,
        currentPage: 1,
    }

    componentWillMount = () => {
        this.handleSelecContinent('all');
    }

    handleSelecContinent = (continent) => {
        let param = '';
        if (continent === "all") param = continent;
        else param = `region/${continent}`;

        this.setState({ loading: true });
        axios.get(`https://restcountries.eu/rest/v2/${param}`)
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
                    ContinentSelect: continent,
                    currentPage: 1,
                });
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false });
            })
    }

    render() {
        let pagination = [];
        let listePays = "";
        if (this.state.listePays) {
            let fin = this.state.listePays.length / 18;
            if (this.state.listePays.length % 18 !== 0) fin++;
            for (let index = 1; index < fin; index++) {
                pagination.push(<Button
                    key={index}
                    type='btn-info'
                    estSelect={this.state.currentPage === index}
                    clic={() => this.setState({ currentPage: index })}
                >{index}</Button>)
            }
            const debut = (this.state.currentPage - 1) * 18;
            const finListe = (this.state.currentPage - 1) * 18 + 18;
            const listeReduite = this.state.listePays.slice(debut, finListe);
            listePays = listeReduite.map((pays) => {
                return (
                    <div className="col-4" key={pays.nom}>
                        <Pays {...pays} />
                    </div>
                );

            })

        }
        return (
            <div>
                <Titre> Liste des pays du monde</Titre>
                <Button type='btn-info' clic={() => this.handleSelecContinent('all')} estSelect={this.state.ContinentSelect === "all"}>Tous</Button>
                <Button type='btn-info' clic={() => this.handleSelecContinent('Europe')} estSelect={this.state.ContinentSelect === "Europe"}>Europe</Button>
                <Button type='btn-info' clic={() => this.handleSelecContinent('Africa')} estSelect={this.state.ContinentSelect === "Africa"}>Afrique</Button>
                <Button type='btn-info' clic={() => this.handleSelecContinent('Asia')} estSelect={this.state.ContinentSelect === "Asia"}>Asie</Button>
                <Button type='btn-info' clic={() => this.handleSelecContinent('Americas')} estSelect={this.state.ContinentSelect === "Americas"}>Amérique</Button>
                <Button type='btn-info' clic={() => this.handleSelecContinent('Oceania')} estSelect={this.state.ContinentSelect === "Oceania"}>Océanie</Button>
                Nonbre de pays: <span className="badge badge-success">{this.state.listePays.length}</span>
                {
                    this.state.loading
                        ? <div>Chargement en cours...</div>
                        : <div className="row no-gutters">
                            {listePays}
                        </div>
                }

                <div>{pagination}</div>
            </div >
        )
    }
}
