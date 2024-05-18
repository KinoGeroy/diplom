import React from 'react';
import LinkButton from "../components/LinkButton";
import {NavLink} from "react-router-dom";

const WelcomePage = () => {

    return (
        <div>
            <LinkButton props={{link: "/registration", title: "РЕГИСТРАЦИЯ"}}/>
            <LinkButton props={{link: "/login", title: "ВХОД"}}/>
        </div>
    );
};

export default WelcomePage;