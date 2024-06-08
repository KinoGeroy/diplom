import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {getUser, logoutPOST} from "../Api";
import SubscriptionType from "../components/SubscriptionType";
import ProjectList from "../components/ProjectList";

import '../styles/Main.css';
import NavigationBar from "../components/NavigationBar";

const Main = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();


    useEffect(() => {
        const token = localStorage.getItem(LS_TOKEN);
        if (!token) navigate('/');
        return;
    }, [navigate]);

    useEffect(() => {
        getUser().then((response) => {
            if (response?.data) {
                setUserData(response.data);
            }
        }).catch(error => {
            console.log(error);
        });
    }, []);

    const handleLogout = () => {
        logoutPOST().then((response) => {
            console.log('LogOut');
        }).catch((error) => {
            console.log(error);
        });
        localStorage.clear();
        navigate('/');
    }

    return (
        <div className={'main'}>
            <NavigationBar/>
            <div className={'main-header'}>
                <span className={'main-username'}>
                    Пользователь: {userData?.name}
                </span>

                <div className={'main-subscription-state'}>
                    <span className={'main-subscription-state-date'}>
                        {!userData?.subscription ? <SubscriptionType/> : 'Ваша подписка до - ' + userData?.subscription.end_date}
                    </span>
                    <span className={'main-subscription-state-type'}>
                        {userData?.subscription && (userData?.subscription.subscription_id ? + 2 ? 'Тип подписки - Расширенная' : 'Тип подписки - базовая' : 'Подписка не оформленна')}
                    </span>
                </div>

                <button type={"button"} onClick={handleLogout} className={'button-submit'}>
                    logout
                </button>
            </div>

            <div className={'main-projects-list'}>
                {userData?.subscription ? (userData?.subscription.active && (<ProjectList/>)) : '<NewProject/>'}
            </div>
        </div>
    );
};

export default Main;