import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {getProjects, getUser, logoutPOST, projectPost} from "../Api";
import SubscriptionType from "../components/SubscriptionType";
import ProjectList from "../components/ProjectList";
import NewProject from "../components/NewProject";

const Main = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    // const [childData, setChildData] = useState('');
    //
    // const handleSetChildData = (value) => {
    //     setChildData(value);
    // }

    useEffect(() => {
        const token = localStorage.getItem(LS_TOKEN);
        if (!token) navigate('/');
        return;
    }, [navigate]);

    useEffect(() => {
        getUser().then((response) => {
            if (response?.data) {
                setUserData(response.data);
                // console.log(response?.data);
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

    // const getProj = () => {
    //     getProjects().then((response) => {
    //         if (response?.data) {
    //             setProjects(response.data);
    //             console.log(response?.data);
    //         }
    //     }).catch(error => {
    //         console.log(error, 'pojList')
    //     });
    // }
    //
    // const create = (inputData) => {
    //     projectPost(inputData).then((response) => {
    //         console.log(response);
    //         return getProj();
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }


    return (
        <div>
            <span>
                {userData?.name}
            </span>
            <div>
                {!userData?.subscription ? <SubscriptionType/> : 'ваша подписка до ' + userData?.subscription.end_date}
                {userData?.subscription && (userData?.subscription.subscription_id ? + 2 ? 'тип подписки - Расширенная' : 'тип подписки - базовая' : 'нету')}
            </div>
            <div>
                {userData?.subscription && (userData?.subscription.active && (<ProjectList/>))}
            </div>
            {/*<div>*/}
            {/*    <NewProject/>*/}
            {/*</div>*/}

            <button type={"button"} onClick={handleLogout}>
                logout
            </button>
        </div>
    );
};

export default Main;