import React, { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contacReducer'
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER,
} from "../types";

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jossic LAPIERRE',
                email: 'jossic.lapierre@gmail.com',
                phone: '06 13 38 56 55',
                type: 'personal'
            },
            {
                id: 1,
                name: 'Pauline LAPIERRE',
                email: 'pauline.lapierre@gmail.com',
                phone: '06 13 38 57 55',
                type: 'personal'
            },
            {
                id: 1,
                name: 'Harvey LAPIERRE',
                email: 'havey.lapierre@gmail.com',
                phone: '06 13 38 58 55',
                type: 'personal'
            },
        ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact

    // Delete contact

    // Set Current contact

    // Clear current contact

    // Update contact

    // Filter contacts

    // Clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;