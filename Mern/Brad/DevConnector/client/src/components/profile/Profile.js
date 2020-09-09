import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { getProfileById } from '../../actions/profile'

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById]);
    return (
        <>
            {profile === null || loading ? <Spinner /> : <>
                Profile
                <Link to='/profiles' className='btn btn-light'>
                    Retour aux profils
                </Link>
                {auth.isAuthenticated && auth.loading === false && auth.user._id === profile.user._id && (<Link to='/edit-profile' className='btn btn-dark'>Modifier mon profil</Link>)}
            </>}
        </>
    )
}

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth,
})

export default connect(mapStateToProps, { getProfileById })(Profile);
