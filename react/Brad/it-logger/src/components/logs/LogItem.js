import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { deleteLog, setCurrent } from "../../actions/logActions";

import M from 'materialize-css/dist/js/materialize.min.js'


const LogItem = ({ log, deleteLog, setCurrent }) => {
    const onDelete = () => {
        deleteLog(log.id);
        M.toast({ html: 'Log supprimé' })
    }
    return (
        <li className='collection-item'>
            <div>
                <a href="#edit-log-modal" onClick={() => setCurrent(log)} className={`modal-trigger ${log.attention ? 'red-text' : 'blue-text'}`}>{log.message}</a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> last updated by{' '}
                    <span className="black-text">{log.tech}</span> on <Moment format='Do MMMM YYYY, h:mm:ss a' />
                </span>
                <a onClick={onDelete} href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired,
    setCurrent: PropTypes.func.isRequired,
}

export default connect(null, { deleteLog, setCurrent })(LogItem);
