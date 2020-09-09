import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/Spinner'
import { Link } from 'react-router-dom'
import DashboardAction from './DashboardAction'
import Experience from './Experience'
import Education from './Education'
import { getCurrentProfile, deleteAccount } from '../../actions/profile'

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile, loading }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return loading && profile === null ? (
        <Spinner />
    ) : (<>
        <h1 className="large text-primary">
            Dashboard
        </h1>
        <p className="lead">
            <i className="fas fas-user"> Bienvenue {user && user.name} </i>
        </p>
        {profile !== null ? (
            <>
                <DashboardAction />
                <Experience experience={profile.experience} />
                <Education education={profile.formation} />
                <div className="my-2">
                    <button className="btn btn-danger" onClick={() => deleteAccount()}>
                        <i className="fas fa-user-minus"></i> Supprimer mon compte
                    </button>
                </div>
            </>
        ) : (
                <p>Votre profil n'est pas encore créé, merci d'en créer un.<br />
                    <Link to='/create-profile' className='btn btn-primary my-1'> Créer un profil</Link>
                </p>)}
    </>);
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
})

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard)
