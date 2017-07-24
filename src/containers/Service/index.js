import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StatusBox from '../../components/StatusBox';
import Stations from '../../components/Stations';
import disruptionsActions from '../../actions/disruptionsActions';
import stationsActions from '../../actions/stationsActions';

class Service extends React.Component {
    componentWillMount() {
        this.props.getDisruptions(this.props.match.params.id);
        this.props.getStations(this.props.match.params.id, this.props.location.coords.latitude, this.props.location.coords.longitude);
    }

    render() {
        return (
            <div className="main">
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
            </div>
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
        dispatch(disruptionsActions.getDisruptions(mode)).then((response) => {
            let data;

            if (response.error) {
                data = 'Netwrok error';
                dispatch(disruptionsActions.disruptionsError(data));
                return;
            } else if (response.payload.data.length > 0) {
                data = response.payload.data;
            } else {
                data = [{ description: 'There are no service disruptions at this time' }];
            }

            dispatch(disruptionsActions.setDisruptions(data));
        });
    },

    getStations: (mode, lat, lon) => {
        dispatch(stationsActions.getStations(mode, lat, lon)).then((response) => {
            let data;

            if (response.error) {
                data = 'Netwrok error';
                dispatch(stationsActions.stationsError(data));
                return;
            } else if (response.payload.data.stopPoints.length > 0) {
                data = response.payload.data.stopPoints;
            } else {
                data = [{ commonName: 'There are no stations within 800m' }];
            }

            dispatch(stationsActions.setStations(data));
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Service);
