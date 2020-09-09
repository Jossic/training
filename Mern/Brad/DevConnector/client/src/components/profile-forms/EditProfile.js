import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createProfile, getCurrentProfile } from '../../actions/profile'

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile, history }) => {
    const [formData, setFormData] = useState({
        entreprise: '',
        website: '',
        adresse: '',
        statut: '',
        competences: '',
        bio: '',
        github: '',
        youtube: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        instagram: ''
    });

    const [displaySocialInputs, toggleSocialInputs] = useState(false);

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            entreprise: loading || !profile.entreprise ? '' : profile.entreprise,
            website: loading || !profile.website ? '' : profile.website,
            adresse: loading || !profile.adresse ? '' : profile.adresse,
            statut: loading || !profile.statut ? '' : profile.statut,
            competences: loading || !profile.competences ? '' : profile.competences.join(','),
            bio: loading || !profile.bio ? '' : profile.bio,
            github: loading || !profile.github ? '' : profile.github,
            youtube: loading || !profile.social ? '' : profile.social.youtube,
            twitter: loading || !profile.social ? '' : profile.social.twitter,
            facebook: loading || !profile.social ? '' : profile.social.facebook,
            linkedin: loading || !profile.social ? '' : profile.social.linkedin,
            instagram: loading || !profile.social ? '' : profile.social.instagram,
        });
    }, [loading, getCurrentProfile]);

    const {
        entreprise,
        website,
        adresse,
        statut,
        competences,
        bio,
        github,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true)
    }
    return (
        <>
            <h1 className="large text-primary">
                Créer votre profil
      </h1>
            <p className="lead">
                <i className="fas fa-user"></i> Ajoutons un peu d'information afin de compléter votre profil
      </p>
            <small>* = Champs recquis</small>
            <form className="form" onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                    <select name="statut" value={statut} onChange={(e) => onChange(e)}>
                        <option value="0">* Quel est votre status actuel ?</option>
                        <option value="Developer">Developpeur</option>
                        <option value="Junior Developer">Junior Developpeur</option>
                        <option value="Senior Developer">Senior Developpeur</option>
                        <option value="Manager">Manager</option>
                        <option value="Student or Learning">Student or Learning</option>
                        <option value="Instructor">Instructor or Teacher</option>
                        <option value="Intern">Intern</option>
                        <option value="Other">Other</option>
                    </select>
                    <small className="form-text">Give us an idea of where you are at in your career</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Entreprise" name="entreprise" value={entreprise} onChange={e => onChange(e)} />
                    <small className="form-text">Could be your own company or one you work for</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Site internet" name="website" value={website} onChange={e => onChange(e)} />
                    <small className="form-text">Could be your own or a company website</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Adresse" name="adresse" value={adresse} onChange={e => onChange(e)} />
                    <small className="form-text">Ville</small>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="* Compétences" name="competences" value={competences} onChange={e => onChange(e)} />
                    <small className="form-text">Please use comma separated values (eg.
            HTML,CSS,JavaScript,PHP)</small>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Github Username"
                        name="github" value={github} onChange={e => onChange(e)}
                    />
                    <small className="form-text">If you want your latest repos and a Github link, include your
            username</small>
                </div>
                <div className="form-group">
                    <textarea placeholder="Une petite description" name="bio" value={bio} onChange={e => onChange(e)}></textarea>
                    <small className="form-text">Tell us a little about yourself</small>
                </div>

                <div className="my-2">
                    <button onClick={() => toggleSocialInputs(!displaySocialInputs)} type="button" className="btn btn-light">
                        Ajouter les liens de mes réseaux
          </button>
                    <span>Optional</span>
                </div>

                {displaySocialInputs && <>
                    <div className="form-group social-input">
                        <i className="fab fa-twitter fa-2x"></i>
                        <input type="text" placeholder="Twitter URL" name="twitter" value={twitter} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-facebook fa-2x"></i>
                        <input type="text" placeholder="Facebook URL" name="facebook" value={facebook} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-youtube fa-2x"></i>
                        <input type="text" placeholder="YouTube URL" name="youtube" value={youtube} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-linkedin fa-2x"></i>
                        <input type="text" placeholder="Linkedin URL" name="linkedin" value={linkedin} onChange={e => onChange(e)} />
                    </div>

                    <div className="form-group social-input">
                        <i className="fab fa-instagram fa-2x"></i>
                        <input type="text" placeholder="Instagram URL" name="instagram" value={instagram} onChange={e => onChange(e)} />
                    </div>
                </>}


                <input type="submit" className="btn btn-primary my-1" />
                <Link className="btn btn-light my-1" to="/dashboard">Retour</Link>
            </form>
        </>
    )
}

EditProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});


export default connect(mapStateToProps,
    { createProfile, getCurrentProfile }
)(withRouter(EditProfile));
