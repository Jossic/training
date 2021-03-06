import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" exact className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pays" exact className="nav-link">Pays</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default NavBar;
