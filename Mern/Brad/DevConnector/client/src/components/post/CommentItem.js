import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
    postId,
    comment: { _id, texte, nom, avatar, user, date },
    auth,
    deleteComment
}) => {
    return (

        <div className="post bg-white p-1 my-1">
            <div>
                <Link to={`/profile${user}`}>
                    <img
                        className="round-img"
                        src={avatar}
                        alt=""
                    />
                    <h4>{nom}</h4>
                </Link>
            </div>
            <div>
                <p className="my-1">
                    {texte}
                </p>
                <p className="post-date">
                    Posté le <Moment format='DD/MM/YYYY'>{date}</Moment>
                </p>
                {!auth.loading && user === auth.user._id && (
                    <button onClick={e => deleteComment(postId, _id)} type='button' className='btn btn-danger'>
                        <i className="fas fa-times"></i>
                    </button>
                )}
            </div>
        </div>

    )
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { deleteComment })(CommentItem)
