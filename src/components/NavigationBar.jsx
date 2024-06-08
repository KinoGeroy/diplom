import React from 'react';
import {useLocation} from "react-router-dom";
import LinkButton from "./LinkButton";
import {LS_TOKEN} from "../constants";

const NavigationBar = () => {
    const location = useLocation();
    if (!localStorage.getItem(LS_TOKEN)) return;

    const renderNav = () => {
        const LINKS = [
            { to: '/main', children: 'Проекты' },
            { to: '/teams', children: 'Команда' },
            { to: '/sub', children: 'Продление подписки' },
        ];

        return (
            <ul className={'navigation-list'}>
                {LINKS.map(link => (
                    <li key={link.to}>
                        <LinkButton to={link.to} children={link.children} classname={location.pathname === link.to ? 'disabled' : ''}/>
                    </li>))
                }
            </ul>
        );
    }

    return renderNav();
};

export default NavigationBar;