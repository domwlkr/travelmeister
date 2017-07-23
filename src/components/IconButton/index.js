import React from 'react';
import PropTypes from 'prop-types';
import './icon-button.css';

const IconButton = ({ link, text, iconClass }) => (
    <a href={link} className="icon-button">
        {text}<i className={iconClass} />
    </a>
);

IconButton.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconClass: PropTypes.string.isRequired,
};

export default IconButton;
