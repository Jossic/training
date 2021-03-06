import React, { Fragment, useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner'
import Repos from '../repos/Repos'
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';



const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, loading, user, repos, getUserRepos } = githubContext

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, []);



    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable
    } = user;

    if (loading) return <Spinner />;


    return (
        <Fragment>
            <Link to='/' className='btn btn-light'>
                Retour à la recherche
               </Link>
               Disponible : {' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                    <i className="fas fa-times-circle text-danger" />

                )}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }} />
                    <h1>{name}</h1>
                    <p>Adresse : {location}</p>
                </div>
                <div>
                    {bio && (<Fragment>
                        <h2>Bio</h2>
                        <p>{bio}</p>
                    </Fragment>)}
                    <a href={html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark my-1">
                        Voir son Github
                        </a>
                    <ul>

                        {login && (
                            <li>
                                <strong>Username :</strong> {login}
                            </li>
                        )}
                        {company && (
                            <li>
                                <strong>Entreprise :</strong> {company}
                            </li>
                        )}
                        {blog && (
                            <li>
                                <strong>Site internet :</strong><a href={blog} target="_blank" rel="noopener noreferrer"> {blog} </a>
                            </li>
                        )}

                    </ul>
                </div>
            </div>


            <div className="card text-center">
                <div className="badge badge-primary">Followers : {followers}</div>
                <div className="badge badge-success">Following : {following}</div>
                <div className="badge badge-light">Repos Publiques : {public_repos}</div>
                <div className="badge badge-dark">Gists Publiques : {public_gists}</div>
            </div>

            <Repos repos={repos} />
        </Fragment>
    );
}


export default User
