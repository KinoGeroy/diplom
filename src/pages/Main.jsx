import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {getUser, logoutPOST} from "../Api";
import SubscriptionType from "../components/SubscriptionType";

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
                console.log(response?.data);
            }
        }).catch(error => {
            console.log(error)
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
        <div>
            <span>
                {userData?.name}
            </span>
            <div>
                {!userData?.is_subscribed ? <SubscriptionType/> : 'ваша подписка до ' + userData?.subscription_end_date}
                {userData?.subscription_type ? + 2 ? 'тип подписки - Расширенная' : 'тип подписки - базовая' : 'нету'}
            </div>
            <div>
            {/*    todo инфа о проектах*/}
            </div>

            <button type={"button"} onClick={handleLogout}>
                logout
            </button>
        </div>
    );
};

export default Main;