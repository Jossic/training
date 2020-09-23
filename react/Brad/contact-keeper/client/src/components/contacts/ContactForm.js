import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const { addContact, updateContact, clearCurrent, current } = contactContext;

    useEffect(() => {
        if (current !== null) {
            setContact(current);
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            });
        }
    }, [contactContext, current])

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault();
        if (current === null) {
            addContact(contact);
        } else {
            updateContact(contact);
        }
        clearAll();
    }

    const clearAll = () => {
        clearCurrent();
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                {current ? 'Modifier un contact' : 'Ajouter un contact'}
            </h2>
            <input
                type="text"
                placeholder='Nom'
                name='name'
                value={name}
                onChange={onChange} />
            <input
                type="email"
                placeholder='Email'
                name='email'
                value={email}
                onChange={onChange} />
            <input
                type="text"
                placeholder='téléphone'
                name='phone'
                value={phone}
                onChange={onChange} />
            <h5>Perso/Pro</h5>
            <input type="radio" name="type" value="personal" checked={type === 'personal'} onChange={onChange} /> Perso {' '}
            <input type="radio" name="type" value="professional" checked={type === 'professional'}
                onChange={onChange} /> Pro
            <div><input type="submit" className='btn btn-primary btn-block' value={current ? 'Modifier ce contact' : 'Ajouter ce contact'} /></div>
            {current && <div>
                <button className='btn btn-light btn-block' onClick={clearAll}>Reset</button>
            </div>}
        </form>
    )
}

export default ContactForm
