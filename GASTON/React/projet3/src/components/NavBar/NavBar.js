import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/" exact
                                className="nav-link"
                                activeClassName="active activeAccueil"
                                activeStyle={{
                                    textDecoration: "underline"
                                }}
                            >Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/pays" exact
                                className="nav-link"
                                activeClassName="active activePays"
                                activeStyle={{
                                    textDecoration: "underline",
                                    color: "black"
                                }}
                            >Pays</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default NavBar;
