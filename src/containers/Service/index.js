import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
import StatusBox from '../../components/StatusBox';
import Stations from '../../components/Stations';
import {
    getDisruptions,
    getDisruptionsSuccess,
    getDisruptionsFailure,
    clearDisruptions,
} from '../../actions/disruptionsActions';
import {
    getStations,
    getStationsSuccess,
    getStationsFailure,
    clearStations,
} from '../../actions/stationsActions';

class Service extends React.Component {
    componentWillMount() {
        this.props.getDisruptions(this.props.match.params.id);
        this.props.getStations(this.props.match.params.id, this.props.location.coords.latitude, this.props.location.coords.longitude);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.coords.longitude !== this.props.location.coords.longitude) {
            this.props.getStations(this.props.match.params.id, this.props.location.coords.latitude, this.props.location.coords.longitude);
        }
    }

    componentWillUnmount() {
        this.props.clearStations();
        this.props.clearDisruptions();
    }

    render() {
        return (
            <Layout className="service">
                <StatusBox
                  disruptions={this.props.disruptions}
                  loading={this.props.loadingDisruptions}
                  mode={this.props.match.params.id}
                />
                <Stations
                  stations={this.props.stations}
                  loading={this.props.loadingStations}
                  mode={this.props.match.params.id}
                />
            </Layout>
        );
    }
}

Service.propTypes = {
    getDisruptions: PropTypes.func.isRequired,
    disruptions: PropTypes.array.isRequired,
    getStations: PropTypes.func.isRequired,
    stations: PropTypes.array.isRequired,
    loadingDisruptions: PropTypes.bool.isRequired,
    loadingStations: PropTypes.bool.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    disruptions: state.disruptionsReducer.disruptions,
    stations: state.stationsReducer.stations,
    location: state.locationReducer,
    loadingDisruptions: state.disruptionsReducer.loading,
    loadingStations: state.stationsReducer.loading,
});

const mapDispatchToProps = dispatch => ({
    getDisruptions: (mode) => {
        dispatch(getDisruptions(mode)).then((response) => {
            let data;

            if (response.error) {
                data = 'Netwrok error';
                dispatch(getDisruptionsFailure(data));
                return;
            } else if (response.payload.data.length > 0) {
                data = response.payload.data;
            } else {
                data = [{ description: 'There are no service disruptions at this time' }];
            }

            dispatch(getDisruptionsSuccess(data));
        });
    },

    clearDisruptions: () => {
        dispatch(clearDisruptions());
    },

    getStations: (mode, lat, lon) => {
        dispatch(getStations(mode, lat, lon)).then((response) => {
            let data;

            if (response.error) {
                data = 'Netwrok error';
                dispatch(getStationsFailure(data));
                return;
            } else if (response.payload.data.stopPoints.length > 0) {
                data = response.payload.data.stopPoints;
            } else {
                data = [{ commonName: 'There are no stations within 800m' }];
            }

            dispatch(getStationsSuccess(data));
        });
    },

    clearStations: () => {
        dispatch(clearStations());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
