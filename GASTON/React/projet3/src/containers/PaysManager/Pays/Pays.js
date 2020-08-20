import React from 'react';
import { NavLink } from 'react-router-dom'

const Pays = (props) => {
    return (
        <div className="row no-gutters border m-2">
            <div className="col-6">
                <img src={props.drapeau} alt={props.nom} width="100%" className="p-2" />
            </div>
            <div className="col">
                <NavLink to={"/pays/" + props.nom} className="nav-link"><h3>{props.nomFr}</h3></NavLink>
                <div>Capitale :  {props.capitale}</div>
                <div>Continent : {props.continent}</div>
                <div>Population :  {props.population}</div>
                <div>Monnaie : {props.monnaie}</div>
            </div>
        </div>
    );

}

export default Pays;
