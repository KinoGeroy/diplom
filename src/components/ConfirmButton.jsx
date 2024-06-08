import React from 'react';

const ConfirmButton = ({onClick, type, children, classname}) => {

    return (
        <button type={type} onClick={onClick} className={'button-submit ' + classname}>
            {children}
        </button>
    );
};

export default ConfirmButton;