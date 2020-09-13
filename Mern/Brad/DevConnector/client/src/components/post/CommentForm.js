import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment } from '../../actions/post'

const CommentForm = ({ postId, addComment }) => {
    const [texte, setText] = useState('');

    return (
        <div className="comment-form">
            <div className="bg-primary p">
                <h3>Laisser un commentaire</h3>
            </div>
            <form className="form my-1" onSubmit={e => {
                e.preventDefault();
                addComment(postId, { texte });
                setText('');
            }}>
                <textarea
                    name="text"
                    cols="30"
                    rows="5"
                    placeholder="Ecrire un commentaire"
                    value={texte}
                    onChange={e => setText(e.target.value)}
                    required
                ></textarea>
                <input type="submit" className="btn btn-dark my-1" value="Submit" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, { addComment })(CommentForm);
