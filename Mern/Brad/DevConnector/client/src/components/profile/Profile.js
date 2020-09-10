import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'
import ProfileAbout from './ProfileAbout'
import ProfileExperience from './ProfileExperience'
import ProfileEducation from './ProfileEducation'
import ProfileGithub from './ProfileGithub'
import { getProfileById } from '../../actions/profile'

const Profile = ({
    getProfileById,
    profile: { profile, loading },
    auth,
    match }) => {
    useEffect(() => {
        getProfileById(match.params.id);
    }, [getProfileById, match.params.id]);
    return (
        <>
            {profile === null || loading ? <Spinner /> : <>
                Profile
                <Link to='/profiles' className='btn btn-light'>
                    Retour aux profils
                </Link>
                {auth.isAuthenticated &&
                    auth.loading === false &&
                    auth.user._id === profile.user._id && (
                        <Link to='/edit-profile' className='btn btn-dark'>
                            Modifier mon profil
                        </Link>)}
                <div class="profile-grid my-1">
                    <ProfileTop profile={profile} />
                    <ProfileAbout profile={profile} />
                    <div className="profile-exp bg-white p-2">
                        <h2 className="text-primary">Experiences</h2>
                        {profile.experience.length > 0 ? (
                            <>
                                {profile.experience.map(exp => (
                                    <ProfileExperience key={exp._id} experience={exp} />
                                ))}
                            </>
                        ) : (
                                <h4>Pas d'experiences renseignées pour l'instant</h4>
                            )}
                    </div>
                    
                    <div className="profile-edu bg-white p-2">
                        <h2 className="text-primary">Formations</h2>
                        {profile.formation.length > 0 ? (
                            <>
                                {profile.formation.map(forma => (
                                    <ProfileEducation key={forma._id} formation={forma} />
                                ))}
                            </>
                        ) : (
                                <h4>Pas de formation renseignées pour l'instant</h4>
                            )}
                    </div>
                            {profile.github && (
                                <ProfileGithub username={profile.github} />
                            )}
                </div>
            </>
            }
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
