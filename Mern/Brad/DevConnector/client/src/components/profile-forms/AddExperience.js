import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addExperience } from '../../actions/profile'

const AddExperience = ({ addExperience, history }) => {
    const [formData, setFormData] = useState({
        entreprise: '',
        nom: '',
        adresse: '',
        de: '',
        a: '',
        actuel: false,
        description: '',
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { entreprise, nom, adresse, de, a, actuel, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <h1 className="large text-primary">
                Ajouter votre experience
      </h1>
            <p className="lead">
                <i className="fas fa-code-branch"></i> Add any developer/programming
        positions that you have had in the past
      </p>
            <small>* = required field</small>
            <form className="form" onSubmit={e => {
                e.preventDefault();
                addExperience(formData, history);
            }}>
                <div className="form-group">
                    <input type="text" placeholder="* Job Title" name="nom" value={nom} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Company" name="entreprise" value={entreprise} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Location" name="adresse" value={adresse} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <h4>From Date</h4>
                    <input type="date" name="de" value={de} onChange={e => onChange(e)} />
                </div>
                <div className="form-group">
                    <p><input type="checkbox" name="actuel" checked={actuel} value={actuel} onChange={e => {
                        setFormData({ ...formData, actuel: !actuel });
                        toggleDisabled(!toDateDisabled);
                    }} /> {' '} Travail actuel</p>
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
                        placeholder="Job Description"
                        value={description} onChange={e => onChange(e)}
                    ></textarea>
                </div>
                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Go Back</Link>
            </form>
        </>
    );

}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(withRouter(AddExperience));
