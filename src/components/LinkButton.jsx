import React from 'react';
import {NavLink} from 'react-router-dom';

const LinkButton = (props) => {
    const data = props.props;
    console.log(data);
    return (
        <NavLink to={data.link}>
            {data.title}
        </NavLink>
    );
};

export default LinkButton;