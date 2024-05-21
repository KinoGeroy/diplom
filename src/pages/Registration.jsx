import React, {useEffect, useState} from 'react';
import ConfirmButton from "../components/ConfirmButton";
import {useLocation, useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {registerPOST} from "../Api";

const Registration = () => {
    const navigate = useNavigate();//принудительный редерект
    //const location = useLocation();

    // location.pathname === '/main';

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            email,
            password,
        };
        // todo валидация
        // const errors = formValidation(formData);
        console.log(!username, !password);
        if (!username || !password) return;


        // useEffect(() => {
        //
        // }, [username, email, password]);
        // если 0 ошибок ->
        registerPOST(formData).then((response) => {
            console.log(response)
            if (response?.data && response.data.token) {
                const token = response.data.token;
                localStorage.setItem(LS_TOKEN, token);

                navigate('/verify');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>
                РЕГИСТРАЦИЯ
            </h1>

            <label>
                ФИО
            </label>
            <input type={"text"} onChange={(e) => setUsername(e.target.value)}/>
            <label>
                Почта
            </label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)}/>
            <label>
                Пароль
            </label>
            <input type={"password"} onChange={(e) => setPassword(e.target.value)}/>

            <ConfirmButton type={'submit'}>
                СОСАТЬЬЬ
            </ConfirmButton>
        </form>
    );
};

export default Registration;

//todo cors(система безопасности браузера)
// copilot
//disabled={location.pathname === '/main'} дизейбл кноки если путь = пути
