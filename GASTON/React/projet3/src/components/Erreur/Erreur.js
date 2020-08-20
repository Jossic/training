import React from 'react';

const Erreur = (props) => {
    return (
        <div className="alert alert-danger">
            {props.children}
        </div>
    );

}

export default Erreur;
