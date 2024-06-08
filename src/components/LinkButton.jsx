import React from 'react';
import {NavLink} from 'react-router-dom';
import '../styles/Link.css';

const LinkButton = ({to, children, classname}) => {
    return (
        <NavLink to={to} className={'link ' + classname}>
            {children}
        </NavLink>
    );
};

export default LinkButton;