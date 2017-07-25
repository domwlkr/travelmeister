import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './containers/Home';
import Service from './containers/Service';
import CycleSearch from './containers/CycleSearch';
import { getLocation } from './actions/locationActions';
import { getDisruptions } from './actions/disruptionsActions';
import { setServiceStatus } from './actions/servicesActions';
import './App.css';

class App extends React.Component {
    componentWillMount() {
        this.props.getLocation();
        this.props.getDisruptions('tube');
        this.props.getDisruptions('dlr');
        this.props.getDisruptions('overground');
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route path="/service/:id" component={Service} />
                    <Route path="/cycle-search" component={CycleSearch} />
                </div>
            </Router>
        );
    }
}

App.propTypes = {
    getLocation: PropTypes.func.isRequired,
    getDisruptions: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    location: state.locationReducer,
    services: state.servicesReducer.services,
});

const mapDispatchToProps = dispatch => ({
    getLocation: () => {
        dispatch(getLocation());
    },
    getDisruptions: (mode) => {
        dispatch(getDisruptions(mode)).then((response) => {
            if (response.payload.data.length > 0) {
                dispatch(setServiceStatus(mode, true));
            }
        });
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
