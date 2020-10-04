import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addTech } from '../../actions/techActions'
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Veuillez entrer un nom' });
        } else {
            addTech({
                firstName,
                lastName
            });

            M.toast({ html: `${firstName} ${lastName} a été ajouté` });

            // Nettoyage
            setFirstName('');
            setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className="modal">
            <div className="modal-content">
                <h4>Ajout d'un technicien</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="prenom" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="prenom" className='active'>
                            Prénom
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="nom" value={lastName} onChange={e => setLastName(e.target.value)} />
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

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired,
}

export default connect(null, { addTech })(AddTechModal)
