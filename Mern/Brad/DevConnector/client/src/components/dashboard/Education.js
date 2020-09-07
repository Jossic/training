import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';

const Education = ({ education }) => {
    const educations = education.map(forma => (
        <tr key={forma._id}>
            <td>{forma.etablissement}</td>
            <td className="hide-sm">{forma.niveau}</td>
            <td className="hide-sm">
                <Moment format='DD/MM/YYYY'>{forma.de}</Moment> - {' '}
                {
                    forma.to === null ? (' maintenant') : (<Moment format='DD/MM/YYYY'>{forma.a}</Moment>)
                }
            </td>
            <td>
                <button className="btn btn-danger">Supprimer</button>
            </td>
        </tr>
    ));
    return (
        <>
            <h2 className="my-2">Vos formations</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Etablissement</th>
                        <th className="hide-sm">Niveau</th>
                        <th className="hide-sm">Dates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{educations}</tbody>
            </table>
        </>
    );
};

Education.propTypes = {
    education: PropTypes.array.isRequired,
}

export default Education;
