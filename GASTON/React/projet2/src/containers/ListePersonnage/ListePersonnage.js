import React, { Component } from 'react';
import axios from 'axios';
import Personnage from './Personnage'

export default class ListePersonnage extends Component {
    state = {
        personnages: null,
        loading: false,
    }

    loadData = () => {
        this.setState({ loading: true });
        axios.get('https://creaperso-67a43.firebaseio.com/persos.json')
            .then((res) => {
                const personnages = Object.values(res.data);
                this.setState({ personnages })
                this.setState({ loading: false });
            })
            .catch((error) => {
                console.log(error)
            })
    }

    componentDidMount = () => {
        this.loadData();
    }

    componentDidUpdate = (oldProps, oldState) => {
        if (oldProps.refresh !== this.props.refresh) {
            this.loadData();
        }

    }

    render() {
        return (
            <>
                <div className="container">
                    {this.state.loading && <div>Chargement...</div>}
                    {!this.state.loading && this.state.personnages &&
                        <div className="row no-gutters p-2 m-2">
                            {this.state.personnages.map((perso, index) => {
                                return (

                                    <div className="col-4 border border-dark p-2" key={index}>{perso.nom}
                                        <Personnage {...perso.perso} />
                                    </div>
                                )
                            })}
                        </div>
                    }
                </div>
            </>
        )
    }
}
