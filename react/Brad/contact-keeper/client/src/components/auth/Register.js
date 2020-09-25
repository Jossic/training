import React, { useState, useContext } from 'react'
import AlertContext from '../../context/alert/alertContext'

const Register = () => {
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            setAlert('Merci de renseigner tous les champs', 'danger')
        } else if (password !== password2) {
            setAlert('Les mots de passes ne correspondent pas', 'danger')
        }
        else {
            console.log('success');
        }

    }

    return (
        <div className='form-container'>
            <h1>
                Créer un <span className='text-primary'> Compte </span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" value={name} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={email} onChange={onChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" value={password} onChange={onChange} required minLength='6' />
                </div>
                <div className="form-group">
                    <label htmlFor="password2">Confirmer le mot de passe</label>
                    <input type="password" name="password2" value={password2} onChange={onChange} required minLength='6' />
                </div>
                <input type="submit" value="Register" className='btn btn-primary btn-block' />
            </form>
        </div>
    )
}

export default Register
