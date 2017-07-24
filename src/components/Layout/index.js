import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/';

const Layout = ({ routeClass, children }) => (
    <div className="layout">
        <Header routeClass={routeClass} />
        <main className="main">
            {children}
        </main>
    </div>
);

Layout.propTypes = {
    routeClass: PropTypes.string,
};

Layout.defaultProps = {
    routeClass: '',
};

export default Layout;
