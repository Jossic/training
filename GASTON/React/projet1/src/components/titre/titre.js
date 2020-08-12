import React, { Component } from 'react';

const Titre = (props) => {
    return (
        <div>
            <h1 className="border border-dark p-2 m-2 text-white text-center bg-primary rounded">{props.children}</h1>
        </div>
    );

}



export default Titre;
