import React, {useEffect} from 'react';
import {getUser} from "../Api";

const User = () => {
    useEffect(() => {
        getUser().then((response) => {
            console.log(response);
        });

    },[]);

    return (
        <div>
        </div>
    );
};

export default User;