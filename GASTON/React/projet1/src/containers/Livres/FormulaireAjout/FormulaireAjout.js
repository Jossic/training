import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
import { withFormik } from 'formik';

class FormulaireAjout extends Component {
    // handleValidationForm = (e) => {
    //     e.preventDefault();
    //     this.props.validation(this.state.monTitre, this.state.monAuteur, this.state.mesPages);
    //     this.setState({
    //         monTitre: "",
    //         monAuteur: "",
    //         mesPages: ""
    //     })
    // }

    render() {
        return (
            <>
                <h2 className="text-center text-primary" style={{ fontFamily: 'Lemonada' }}>Ajouter un livre</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="titre">Titre du livre</label>
                        <input type="text" name="titre"
                            value={this.props.values.titre}
                            className="form-control" id="titre" placeholder="Titre du livre"
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur du livre</label>
                        <input type="text" name="auteur"
                            value={this.props.values.auteur}
                            className="form-control" id="auteur" placeholder="Auteur du livre"
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages du livre</label>
                        <input type="number" name="nbPages"
                            value={this.props.values.nbPages}
                            className="form-control" id="nbPages" placeholder="Nombre de pages du livre"
                            onChange={this.props.handleChange}
                        />
                    </div >
                    <Button type="btn-primary" clic={this.props.handleSubmit}>Envoyer</Button>
                </form >
            </>
        )
    }
}

export default withFormik({
    mapPropsToValues: () => ({
        titre: '',
        auteur: '',
        nbPages: ''
    }),
    validate: values => {

    }, handleSubmit: (values, { props }) => {
        props.validation(values.titre, values.auteur, values.nbPages);
    }
})(FormulaireAjout)