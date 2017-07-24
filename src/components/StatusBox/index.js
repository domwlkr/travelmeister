import React from 'react';
import PropTypes from 'prop-types';
import './status-box.css';

const StatusBox = ({ disruptions, loading, mode }) => {
    const statuses = disruptions.map((disruption, i) => (
        <div className="status" key={disruption}>{disruption[i].description}</div>
    ));

    return (
        <div className={`status-box ${loading ? 'loading' : ''}`}>
            <span className="message">Getting {mode} status...</span>
            <div className="statuses">
                <h3>{mode} status</h3>
                {statuses}
            </div>
        </div>
    );
};

StatusBox.propTypes = {
    disruptions: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
};

export default StatusBox;
