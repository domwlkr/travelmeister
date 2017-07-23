import React from 'react';
import { geolocated, geoPropTypes } from 'react-geolocated';
import './geolocator.css';

class GeoLocator extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
          ? <div className="geolocator">Your browser does not support Geolocation</div>
          : !this.props.isGeolocationEnabled
            ? <div className="geolocator">Geolocation is not enabled</div>
            : this.props.coords
              ? <div className="geolocator">
                  <span>Current location:</span>
                  <div className="geolocator__location">
                      <div>latitude: {this.props.coords.latitude}</div>
                      <div>longitude: {this.props.coords.longitude}</div>
                  </div>
              </div>
              : <div className="geolocator">Getting your location data&hellip; </div>;
    }
}

GeoLocator.propTypes = Object.assign({}, GeoLocator.propTypes, geoPropTypes);

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(GeoLocator);
