import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types';

// Récupérer le profil en cours
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('.api/profile/me');

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

//Créer ou modifier un profil

export const createProfile = (formData, history, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('/api/profile', formData, config);

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

        dispatch(setAlert(edit ? 'Votre profil a bien été modifié' : 'Votre profil a bien été créé', 'success'));

        if (!edit) {
            history.push('/dashboard');
        }

    } catch (e) {
        const errors = e.response.data.errors;

        if (errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: e.response.statusText, status: e.response.status }
        });
    }
}