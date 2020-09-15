import React from 'react'

const NotFound = () => {
    return (
        <>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle"></i>
                Page non trouvée
            </h1>
            <p className="large">Désolé, cette page n'existe pas</p>
        </>
    )
}

export default NotFound;