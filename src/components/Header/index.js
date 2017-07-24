import React from 'react';
import PropTypes from 'prop-types';
import BackButton from '../BackButton/';
import './header.css';

const Header = ({ routeClass }) => (
    <div className={`header ${routeClass}`}>
        <h2>Travelmeister</h2>
        <BackButton />
    </div>
);

Header.propTypes = {
    routeClass: PropTypes.string,
};

Header.defaultProps = {
    routeClass: '',
};

export default Header;
