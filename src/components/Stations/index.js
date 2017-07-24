import React from 'react';
import PropTypes from 'prop-types';
import Station from './Station';
import './stations.css';

const Stations = ({ stations, loading, mode }) => {
    const stationItems = stations.map(station => (
        <Station key={station.commonName} station={station} />
    ));

    return (
        <div className={`stations ${loading ? 'loading' : ''}`}>
            <span className="message">Getting {mode} status...</span>
            <div className="stations">
                <h3>Nearby Stations</h3>
                {stationItems}
            </div>
        </div>
    );
};

Stations.propTypes = {
    stations: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    mode: PropTypes.string.isRequired,
};

export default Stations;
