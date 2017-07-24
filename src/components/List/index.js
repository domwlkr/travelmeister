import React from 'react';
import './list.css';

const List = ({ children }) => {
    const buttons = children.map((child, i) => (
        <li key={i}>
            {child}
        </li>
    ));

    return (
        <ul className="list">
            {buttons}
        </ul>
    );
};

export default List;
