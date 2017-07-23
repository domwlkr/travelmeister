import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '../../components/List';
import IconLink from '../../components/IconLink';
import GeoLocator from '../../components/GeoLocator';
import disruptionsActions from '../../actions/disruptionsActions';
import servicesActions from '../../actions/servicesActions';

class Home extends React.Component {
    componentWillMount() {
        this.props.getDisruptions('tube');
        this.props.getDisruptions('dlr');
        this.props.getDisruptions('overground');
    }

    render() {
        const links = this.props.services.map(service => (
            <IconLink
              text={service.mode}
              key={service.mode}
              iconClass={service.disruptions}
            />
        ));

        return (
            <div className="main">
                <GeoLocator />

                <List>
                    {links}
                </List>
            </div>
        );
    }
}

Home.propTypes = {
    getDisruptions: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
    return {
        services: state.servicesReducer.services,
        disruptions: state.disruptionsReducer.disruptions,
    };
};

const mapDispatchToProps = dispatch => ({
    getDisruptions: (mode) => {
        if (mode) {
            dispatch(disruptionsActions.getDisruptions(mode)).then((response) => {
                if (response.payload.data.length > 0) {
                    dispatch(servicesActions.setServiceStatus(mode, true));
                }
            });
        }
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
