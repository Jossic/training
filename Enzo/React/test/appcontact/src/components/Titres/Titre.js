import React from 'react'
import PropTypes from 'prop-types'

const Titre = ({ nom }) => {
    return (
        <div>
            <h1>Bonjour, je m'appelle {nom}</h1>
        </div>
    )
}

Titre.propTypes = {
    nom: PropTypes.string.isRequired,
}

export default Titre
