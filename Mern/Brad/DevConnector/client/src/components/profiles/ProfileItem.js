import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        statut,
        entreprise,
        adresse,
        competences,
    }
}) => {
    return (
        <div className='profile bg-light'>
            <img src={avatar} alt="" className="round-img" />
            <div>
                <h2>{name}</h2>
                <p>{statut} {entreprise && <span>Travail chez {entreprise}</span>}</p>
                <p className="my-1">{adresse && <span>{adresse}</span>}</p>
                <Link to={`/profile/${_id}`} className='btn btn-primary'>Voir le profil</Link>
            </div>
            <ul>
                {competences.slice(0, 4).map((competence, index) => (
                    <li key={index} className="text-primary">
                        <i className="fas fa-check"></i>{competence}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired,
}

export default ProfileItem
