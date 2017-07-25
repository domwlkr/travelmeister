import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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

            <h3>Check travel services</h3>
            <List>
                {links}
            </List>

            <h3>Search for bike locations</h3>
            <Link to="/cycle-search" className="icon-link">Cycle search</Link>
        </Layout>
    );
};

Home.propTypes = {
    services: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({ services: state.servicesReducer.services });

export default connect(mapStateToProps)(Home);
