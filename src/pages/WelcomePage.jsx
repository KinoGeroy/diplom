import React, {useEffect, useState} from 'react';
import LinkButton from "../components/LinkButton";
import SubscriptionType from "../components/SubscriptionType";
import {getSubscriptions} from "../Api";

const WelcomePage = () => {




    return (
        <div>
            <LinkButton to={'/registration'} children={'РЕГИСТРАЦИЯ'}/>
            <LinkButton to={'/login'} children={'ВХОД'}/>

            <div>
                <p>Добро пожаловать на наш сайт-сервис для офисного управления!</p>
                <p>Мы предлагаем вам широкий спектр услуг для оптимизации работы вашего офиса.
                    Наш сервис позволяет вам эффективно управлять документами, назначать задачи сотрудникам, отслеживать процессы и контролировать бюджет.</p>
                <p>Наша система является простой и интуитивно понятной, что позволяет вам быстро освоиться и начать использовать ее в своей работе.
                    Мы предоставляем вам доступ к системе с любого устройства, что позволяет вам управлять офисом из любой точки мира.</p>
            </div>

            <div>
                <SubscriptionType/>
            </div>
        </div>
    );
};

export default WelcomePage;