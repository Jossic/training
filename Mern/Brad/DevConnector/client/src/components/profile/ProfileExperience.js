import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({
    experience: {
        entreprise,
        nom,
        adresse,
        actuel,
        de,
        a,
        description
    }
}) => {
    return (
        <>
            <div>
                <h3 className="text-dark">{entreprise}</h3>
                <p>
                    <Moment format='DD/MM/YYYY'>{de}</Moment> -{' '}
                    {!a ? ' Maintenant' : <Moment format='DD/>MM/YYYY'>{a}</Moment>}
                </p>
                <p><strong>Poste: </strong>{nom}</p>
                <p>
                    <strong>Description: </strong>{description}
                </p>
            </div>


        </>
    )
}

ProfileExperience.propTypes = {
    experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
