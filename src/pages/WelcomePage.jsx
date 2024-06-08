import React, {useEffect, useState} from 'react';
import LinkButton from "../components/LinkButton";
import SubscriptionType from "../components/SubscriptionType";
import {getSubscriptions} from "../Api";
import '../styles/WelcomePage.css';
import {LS_TOKEN} from "../constants";
import {useNavigate} from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const WelcomePage = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(localStorage.getItem(LS_TOKEN))
    //     // if (localStorage.getItem(LS_TOKEN)) {
    //     //     navigate('/main');
    //     // }
    // }, [navigate]);

    // const renderLinks = () => {
    //     return ()
    // }

    return (
        <div>
            {!localStorage.getItem(LS_TOKEN) ?
                  <>
                      <LinkButton to={'/registration'} children={'РЕГИСТРАЦИЯ'}/>
                      <LinkButton to={'/login'} children={'ВХОД'}/>
                  </>
                : <NavigationBar/>
            }

            <div className={'container__welcome-description'}>
                <h1 className={'welcome-title'}>Добро пожаловать на наш сайт-сервис для офисного управления!</h1>
                <p className={'welcome-description'}>Мы предлагаем вам широкий спектр услуг для оптимизации работы вашего офиса.
                    Наш сервис позволяет вам эффективно управлять документами, назначать задачи сотрудникам, отслеживать процессы и контролировать бюджет.</p>
                <p className={'welcome-description'}>Наша система является простой и интуитивно понятной, что позволяет вам быстро освоиться и начать использовать ее в своей работе.
                    Мы предоставляем вам доступ к системе с любого устройства, что позволяет вам управлять офисом из любой точки мира.</p>
            </div>

            <div>
                <SubscriptionType/>
            </div>
        </div>
    );
};

export default WelcomePage;