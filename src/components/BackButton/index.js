import React from 'react';
import { Link } from 'react-router-dom';
import './back-button.css';

const BackButton = () => (
    <Link to="/" className="back-button">Back</Link>
);

export default BackButton;
