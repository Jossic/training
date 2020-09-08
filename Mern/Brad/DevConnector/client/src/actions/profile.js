import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_PROFILE,
    UPDATE_PROFILE,
    PROFILE_ERROR,
    DELETE_ACCOUNT,
    CLEAR_PROFILE,
    GET_PROFILES,
    GET_REPOS,
} from './types';

// Récupérer le profil en cours
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');

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


// Récupérer tous les profils
export const getProfiles = () => async dispatch => {
    dispatch({ type: CLEAR_PROFILE });

    try {
        const res = await axios.get('/api/profile');

        dispatch({
            type: GET_PROFILES,
            payload: res.data
        });
    } catch (error) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.response.statusText, status: error.response.status }
        });
    }
};

// Récupérer un profil via son id
export const getProfileById = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/profile/user/${userId}`);

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

// Récupérer les repos Github
export const getGithubRepos = (username) => async dispatch => {

    try {
        const res = await axios.get(`/api/profile/github/${username}`);

        dispatch({
            type: GET_REPOS,
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
};

//Ajout exp
export const addExperience = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/profile/experience', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Votre experience a bien été ajoutée', 'success'));
        history.push('/dashboard');


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
};

//Ajout formation
export const addEducation = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/profile/formation', formData, config);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Votre formation a bien été ajoutée', 'success'));
        history.push('/dashboard');


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
};


// Delete experience
export const deleteExperience = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/experience/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Cette experience a bien été supprimée', 'success'));
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: e.response.statusText, status: e.response.status }
        });
    }
};

// Delete formation
export const deleteEducation = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/profile/formation/${id}`);

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Cette formation a bien été supprimée', 'success'));
    } catch (e) {
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: e.response.statusText, status: e.response.status }
        });
    }
};


// Supprimer compte et profil
export const deleteAccount = () => async dispatch => {

    if (window.confirm('Etes-vous sûr ? (Cette opération est irréversible)')) {
        try {
            await axios.delete(`/api/profile`);

            dispatch({ type: CLEAR_PROFILE });
            dispatch({ type: DELETE_ACCOUNT });

            dispatch(setAlert('Votre compte a bien été supprimé'));
        } catch (e) {
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: e.response.statusText, status: e.response.status }
            });
        }
    }

};