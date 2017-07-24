import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './geolocator.css';

const Location = ({ location }) => (
    <div className="geolocator">
        <div>Latitude: <span>{location.coords.latitude}</span></div>
        <div>Longitude: <span>{location.coords.longitude}</span></div>
    </div>
);

Location.propTypes = {
    location: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({ location: state.locationReducer });

export default connect(mapStateToProps)(Location);
