import React from 'react';
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {logoutPOST} from "../Api";

const Main = () => {
    const navigate = useNavigate();
    //todo logout - удаление токена - дроп на главную
    const handleLogout = () => {
        logoutPOST().then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        });
        localStorage.clear();
        navigate('/');
    }

    return (
        <div>
            qwe

            <button type={"button"} onClick={handleLogout}>
                logout
            </button>
        </div>
    );
};

export default Main;