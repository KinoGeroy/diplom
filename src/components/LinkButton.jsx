import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkButton = ({to, children}) => {
    return (
        <NavLink to={to}>
            {children}
        </NavLink>
    );
};

export default LinkButton;