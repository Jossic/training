import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = () => {
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');

    const onSubmit = () => {
        if (prenom === '' || nom === '') {
            M.toast({ html: 'Veuillez entrer un nom' });
        } else {
            console.log('yey');

            // Nettoyage
            setPrenom('');
            setNom('');
        }
    }

    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>Ajout d'un technicien</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="prenom" value={prenom} onChange={e => setPrenom(e.target.value)} />
                        <label htmlFor="prenom" className='active'>
                            Prénom
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="nom" value={nom} onChange={e => setNom(e.target.value)} />
                        <label htmlFor="nom" className='active'>
                            Nom
                        </label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect waves-green btn" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

export default AddTechModal
