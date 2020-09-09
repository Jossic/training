import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'

const AddEducation = ({ addEducation, history }) => {
    const [formData, setFormData] = useState({
        etablissement: '',
        niveau: '',
        domaine: '',
        de: '',
        a: '',
        actuel: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { etablissement, niveau, domaine, de, a, actuel, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <h1 className="large text-primary">
                Ajouter une formation
      </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Ajouter votre formation
      </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addEducation(formData, history);
            }}>
                <div className="form-group">
                    <input type="text" placeholder="* Etablissement" name="etablissement" value={etablissement} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Niveau" name="niveau" value={niveau} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Domaine" name="domaine" value={domaine} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="de" value={de} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="actuel" checked={actuel} value={actuel} onChange={e => {
                        setFormData({ ...formData, actuel: !actuel });
                        toggleDisabled(!toDateDisabled);
                    }} /> {' '} Formation en cours</p>
                </div>
                <div className="form-group">
                    <h4>To Date</h4>
                    <input type="date" name="a" value={a} onChange={e => onChange(e)} disabled={toDateDisabled ? 'disabled' : ''} />
                </div>
                <div className="form-group">
                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Compétences acquises"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    );

}

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(AddEducation));
