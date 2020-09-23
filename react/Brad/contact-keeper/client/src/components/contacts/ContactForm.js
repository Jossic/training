import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

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
        contactContext.addContact(contact);
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Ajouter un contact</h2>
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
            <div><input type="submit" className='btn btn-primary btn-block' value="Ajouter un contact" /></div>
        </form>
    )
}

export default ContactForm
