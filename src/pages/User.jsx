import React, {useEffect} from 'react';
import {getUser} from "../Api";

const User = () => {
    useEffect(() => {
        getUser().then();
    },[]);

    return (
        <div>

        </div>
    );
};

export default User;