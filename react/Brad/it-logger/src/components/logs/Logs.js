import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import PreLoader from '../layout/PreLoader';
import LogItem from './LogItem';
import PropTypes from 'prop-types'
import { getLogs } from '../../actions/logActions'


const Logs = ({ log: { logs, loading }, getLogs }) => {


    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, [])


    if (loading || logs === null) {
        return <PreLoader />
    }

    return (
        <ul className='collection with-header'>
            <li className='collection-header'>
                <h4 className='center'>Logs systèmes</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className='center'>Aucun logs actuellement...</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}
Logs.propTypes = {
    log: PropTypes.object.isRequired,
    getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    log: state.log
})

export default connect(mapStateToProps, { getLogs })(Logs)
