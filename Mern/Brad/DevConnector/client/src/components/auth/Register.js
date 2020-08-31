import React, { useState } from 'react';

const Register = (props) => {
    const [formData, setFormData] = useState({
        nom: '',
        email: '',
        password: '',
        password2: '',
    });

    const { nom, email, password, password2 } = formData;

    const onChange = e =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Les mot de passes ne correspondent pas !');
        } else {
            console.log(formData);;
        }
    };
    return (
        <>
            <h1 className="large text-primary">Sign Up</h1>
            <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <input type="text" placeholder="Nom" name="nom" value={nom} onChange={e => onChange(e)} required />
                </div>
                <div className="form-group">
                    <input type="email" placeholder="Adresse email" name="email" value={email} onChange={e => onChange(e)} />
                    <small className="form-text">This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
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
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        minLength="6" value={password2} onChange={e => onChange(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary" value="Register" />
            </form>
            <p className="my-1">
                Already have an account? <a href="login.html">Sign In</a>
            </p>
        </>
    );

}

export default Register;

