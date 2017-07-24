import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getLocation } from '../../actions/locationActions';
import './geolocator.css';

class Location extends React.Component {
    componentWillMount() {
        this.props.getLocation();
    }

    render() {
        return (
            <div className="geolocator">
                <div>Latitude: <span>{this.props.location.coords.latitude}</span></div>
                <div>Longitude: <span>{this.props.location.coords.longitude}</span></div>
            </div>
        );
    }
}

Location.propTypes = {
    location: PropTypes.object.isRequired,
    getLocation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ location: state.locationReducer });

const mapDispatchToProps = dispatch => ({
    getLocation: () => {
        dispatch(getLocation());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Location);
