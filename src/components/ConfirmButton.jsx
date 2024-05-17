import React from 'react';

const ConfirmButton = ({onClick, type, children}) => {

    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default ConfirmButton;