import React, { Component } from 'react'
import axios from "axios"
import Titre from '../../../components/Titres/Titre'
import Pays from '../Pays/Pays'

export default class UnPays extends Component {

    state = {
        data: null,
        loading: false,
    }

    componentDidMount = () => {
        this.setState({ loading: true });
        axios.get(`https://restcountries.eu/rest/v2/name/${this.props.nomPays}?fullText=true`)
            .then((res) => {

                this.setState({
                    data: res.data[0],
                    loading: false
                });
            })
            .catch((error) => {
                console.log(error)
                this.setState({ loading: false });
            })
    }

    render() {
        return (
            <div className="container">
                <Titre> Infos du pays {this.props.nomPays}</Titre>
                {
                    this.state.data &&
                    <Pays
                        drapeau={this.state.data.flag}
                        nom={this.state.data.translations.fr}
                        capitale={this.state.data.capital}
                        continent={this.state.data.region}
                        population={this.state.data.population}
                        monnaie={this.state.data.currencies[0].name}
                        {...this.props}

                    />
                }

            </div>
        )
    }
}
