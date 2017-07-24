import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from '../../components/Layout';
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
        <Layout routeClass="home">
            <GeoLocator />

            <List>
                {links}
            </List>
        </Layout>
    );
};

Home.propTypes = {
    services: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ services: state.servicesReducer.services });

export default connect(mapStateToProps)(Home);
