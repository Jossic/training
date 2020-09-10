import React from 'react'
import PropTypes from 'prop-types'

const ProfileAbout = ({
    profile: {
        bio,
        competences,
        user: { name }
    }
}) => {
    return (
        <>
            <div className="profile-about bg-light p-2">

                {bio &&
                    <>
                        <h2 className="text-primary">La bio de {name.trim().split(' ')[0]}</h2>
                        <p>
                            {bio}
                        </p>
                    </>
                }

                <div className="line"></div>
                <h2 className="text-primary">Ses compétences</h2>
                <div className="skills">
                    {competences.map((comp, index) => (
                        <div key={index} className="p-1"><i className="fa fa-check"></i> {comp}</div>
                    ))}


                </div>
            </div>
        </>
    )
}

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
