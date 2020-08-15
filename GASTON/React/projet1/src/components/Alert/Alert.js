import React, { Component } from 'react';

const Alert = (props) => {
    const maClasse = `alert alert-dismissible ${props.typeAlert}`;
    return (
        <div className={maClasse}>
            <strong>{props.children}</strong>
        </div>
    );

}

export default Alert;
