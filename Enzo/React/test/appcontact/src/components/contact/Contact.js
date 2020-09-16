import React from 'react'

const Contact = (
    {
        nom: 'John Doe',
        email: 'johndoe@gmail.com',
        tel: '01 23 45 65 98'
    },
    {
        nom: 'Jane Doe',
        email: 'janedoe@gmail.com',
        tel: '01 55 45 65 98'
    },
    {
        nom: 'Jack Black',
        email: 'jackblacke@gmail.com',
        tel: '01 23 42 12 98'
    }

);

return (
    <div className='card card-body mb-3' >
        <h4></h4>
        <ul className="card card-body mb-3">
            <li className='list-group-item'>Nom: {nom}</li>
            <li className='list-group-item'>Email:{email}</li>
            <li className='list-group-item'>Telephone:{tel}</li>
        </ul>
    </div >
)



export default Contact;
