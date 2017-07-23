import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './icon-link.css';

const IconLink = ({ link, text, iconClass }) => (
    <Link to={link} className="icon-link">
        {text}<i className={iconClass} />
    </Link>
);

IconLink.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
};

export default IconLink;
