import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import List from '../../components/List';
import IconLink from '../../components/IconLink';
import GeoLocator from '../../components/GeoLocator';

const Home = ({ services }) => {
    const links = services.map(service => (
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
};

Home.propTypes = {
    services: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ services: state.servicesReducer.services });

export default connect(mapStateToProps)(Home);
