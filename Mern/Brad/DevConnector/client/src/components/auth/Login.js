import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        console.log('success');
    };
    return (
        <>
            <h1 className="large text-primary">Se connecter</h1>
            <p className="lead"><i className="fas fa-user"></i> Se connecter à votre compte</p>
            <form className="form" onSubmit={e => onSubmit(e)}>

                <div className="form-group">
                    <input type="email" placeholder="Adresse email" name="email" value={email} onChange={e => onChange(e)} />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        minLength="6"
                        value={password} onChange={e => onChange(e)}
                    />
                </div>
                <div className="form-group">

                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Vous n'avez pas de compte? <Link to="/register">En créer un !</Link>
            </p>
        </>
    );

}

export default Login;
