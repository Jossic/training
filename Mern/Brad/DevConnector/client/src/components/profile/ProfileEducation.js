import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
    formation: {
        etablissement,
        niveau,
        domaine,
        actuel,
        de,
        a,
        description
    }
}) => {
    return (
        <>
            <div>
                <h3 className="text-dark">{etablissement}</h3>
                <p>
                    <Moment format='DD/MM/YYYY'>{de}</Moment> -{' '}
                    {!a ? ' Maintenant' : <Moment format='DD/>MM/YYYY'>{a}</Moment>}
                </p>
                <p><strong>Niveau: </strong>{niveau}</p>
                <p><strong>Domaine: </strong>{domaine}</p>
                <p>
                    <strong>Description: </strong>{description}
                </p>
            </div>


        </>
    )
}

ProfileEducation.propTypes = {
    formation: PropTypes.array.isRequired,
};

export default ProfileEducation;
