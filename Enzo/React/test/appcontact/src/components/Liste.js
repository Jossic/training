import React, { useState } from 'react'
import Contact from './contact/Contact';

export const Liste = ({ contact: { nom, email, tel } }) => {

    return (
        <div>
            {contact.map((contact) => (
                <Contact
                    nom={nom}
                    email={email}
                    tel={tel}

                />
            ))}
        </div>
    )
}
