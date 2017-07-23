import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './icon-link.css';

const IconLink = ({ text, iconClass }) => (
    <Link to={`/service/${text}`} className="icon-link">
        {text}<i className={iconClass ? 'warning' : ''} />
    </Link>
);

IconLink.propTypes = {
    text: PropTypes.string.isRequired,
    iconClass: PropTypes.bool.isRequired,
};

export default IconLink;
