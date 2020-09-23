import React, { useReducer } from 'react'
import { stringify, v4 as uuidv4 } from 'uuid';
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
                id: 2,
                name: 'Pauline LAPIERRE',
                email: 'pauline.lapierre@gmail.com',
                phone: '06 13 38 57 55',
                type: 'personal'
            },
            {
                id: 3,
                name: 'Harvey LAPIERRE',
                email: 'havey.lapierre@gmail.com',
                phone: '06 13 38 58 55',
                type: 'personal'
            },
        ],
        current: null
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    // Add contact
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    }

    // Delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    }
    // Set Current contact
    const setCurrent = (contact) => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }

    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }

    // Update contact
    const updateContact = (contact) => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }
    // Filter contacts

    // Clear filter

    return (
        <ContactContext.Provider
            value={{
                contacts: state.contacts,
                current: state.current,
                addContact,
                deleteContact,
                setCurrent,
                clearCurrent,
                updateContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;