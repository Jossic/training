import React from 'react'

export const Header = () => {
    return (
        <div>
            <nav className='navbar navbardark bg-primary mb-3 py-0'>
                <div className="container">
                    <a href="/" target="_blank" className='navbar-brand' rel="noopener noreferrer"></a>
                    <ul className="navbar-nav">
                        <li className="nav-item ml-auto"><a href="/" className='nav-link'>Accueil</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
