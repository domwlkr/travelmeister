import React from 'react';
import PropTypes from 'prop-types';
import './station.css';

const Station = ({ station }) => {
    let stationsLines;

    if (station.modes === undefined) {
        stationsLines = '';
    } else {
        stationsLines = station.modes.map((mode, i) => {
            const lines = station.lineModeGroups[i].lineIdentifier.map(line => <li key={line}>{line}</li>);

            return (
                <div key={i} className="station-lines">
                    <h3>{mode}</h3>
                    <ul>
                        {lines}
                    </ul>
                </div>
            );
        });
    }

    return (
        <div className="station">
            <div className="station-header">
                {station.commonName}
            </div>
            <div className="station-content">
                <p>All services at station</p>
                {stationsLines}
            </div>
        </div>
    );
};

Station.propTypes = {
    station: PropTypes.object.isRequired,
};

export default Station;
