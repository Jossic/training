import React, { useState } from 'react'

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value })


    return (
        <form>
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
            <input type="radio" name="type" value="personal" checked={type === 'personal'} /> Perso {' '}
            <input type="radio" name="type" value="professional" checked={type === 'professional'} /> Pro
            <div><input type="submit" className='btn btn-primary btn-block' value="Ajouter un contact" /></div>
        </form>
    )
}

export default ContactForm
