import React, { Component } from 'react';
import Button from '../../../components/Buttons/Button';
import { withFormik, ErrorMessage } from 'formik';
import * as Yup from "yup";

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
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.touched.titre && this.props.errors.titre && <span style={{ color: "red" }}>{this.props.errors.titre}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="auteur">Auteur du livre</label>
                        <input type="text" name="auteur"
                            value={this.props.values.auteur}
                            className="form-control" id="auteur" placeholder="Auteur du livre"
                            onChange={this.props.handleChange}
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.touched.auteur && this.props.errors.auteur && <span style={{ color: "red" }}>{this.props.errors.auteur}</span>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="nbPages">Nombre de pages du livre</label>
                        <input type="number" name="nbPages"
                            value={this.props.values.nbPages}
                            className="form-control" id="nbPages" placeholder="Nombre de pages du livre"
                            onChange={(e) => this.props.setFieldValue('nbPages', +e.target.value)}
                            onBlur={this.props.handleBlur}
                        />
                        {this.props.touched.nbPages && this.props.errors.nbPages && <span style={{ color: "red" }}>{this.props.errors.nbPages}</span>}
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
    validationSchema: Yup.object().shape({
        titre: Yup.string()
            .min(3, 'Le titre doit avoir plus de 3 caractères')
            .max(60, 'Faut pas déconner là ?')
            .required('Le titre du livre est obligatoire'),
        auteur: Yup.string()
            .required('Le nom de l\'auteur est obligatoire'),
        nbPages: Yup.number().required('Le nombre de pages est obligatoire')

    }),
    // validate: values => {
    //     // const errors = {};
    //     // if (values.titre.length < 3) {
    //     //     errors.titre = "Le titre du livre doit avoir plus de 3 caractères";
    //     // }
    //     // if (!values.auteur) {
    //     //     errors.auteur = "Ce champ est obligatoire";
    //     // }
    //     // if (!values.nbPages) {
    //     //     errors.nbPages = "Ce champ est obligatoire";
    //     // }
    //     // return errors;
    // }, 
    handleSubmit: (values, { props }) => {
        props.validation(values.titre, values.auteur, values.nbPages);
    }
})(FormulaireAjout)