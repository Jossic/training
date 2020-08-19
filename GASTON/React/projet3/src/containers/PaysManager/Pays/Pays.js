import React from 'react';

const Pays = (props) => {
    return (
        <div className="row no-gutters border m-2">
            <div className="col-6">
                <img src={props.drapeau} alt={props.nom} width="100%" className="p-2" />
            </div>
            <div className="col">
                <h4>Nom :  {props.nomFr}</h4>
                <div>Capitale :  {props.capitale}</div>
                <div>Continent : {props.continent}</div>
                <div>Population :  {props.population}</div>
                <div>Monnaie : {props.monnaie}</div>
            </div>
        </div>
    );

}

export default Pays;
