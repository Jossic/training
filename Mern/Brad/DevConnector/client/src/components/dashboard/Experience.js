import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile'

const Experience = ({ experience, deleteExperience }) => {
    const experiences = experience.map(exp => (
        <tr key={exp._id}>
            <td>{exp.entreprise}</td>
            <td className="hide-sm">{exp.nom}</td>
            <td className="hide-sm">
                <Moment format='DD/MM/YYYY'>{exp.de}</Moment> -{' '}
                {exp.a === null ? (
                    ' maintenant'
                ) : (
                        <Moment format='DD/MM/YYYY'>{exp.a}</Moment>
                    )}
            </td>
            <td>
                <button onClick={() => deleteExperience(exp._id)} className="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    ));
    return (
        <>
            <h2 className="my-2">Vos experiences</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Entreprise</th>
                        <th className="hide-sm">Nom</th>
                        <th className="hide-sm">Année</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{experiences}</tbody>
            </table>
        </>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired,
}

export default connect(null, { deleteExperience })(Experience);
