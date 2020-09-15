import React from 'react'

export const Header = () => {
    return (
        <div>
            <nav className='navbar navbardark bg-primary mb-3 py-0'>
                <div className="container">
                    <a href="/" className='navbar-brand text-white'>AppContact</a>
                    <ul className="navbar-nav">
                        <li className="nav-item ml-auto"><a href="/" className='nav-link text-white'>Accueil</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
