import React, {useState} from 'react';
import {loginPOST} from "../Api";
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import '../styles/RegistrationLoginForm.css';
import '../styles/ButtonSubmit.css';
import ConfirmButton from "../components/ConfirmButton";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlerSubmit =  (e) => {
        e.preventDefault();

        if (!email.length || !password.length) return;
        //todo валидация

        //todo добавить токен в апи
        loginPOST({email, password}).then((response) => {
            console.log(response);
            if (response?.data && response.data.token) {
                const token = response.data.token;
                localStorage.setItem(LS_TOKEN, token);
                navigate('/main');
            }
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handlerSubmit} className={'Registration-form'}>
            <h1 className={'Registration-form__title'}>
                Вход
            </h1>

            <label className={'Registration-form__label'} htmlFor={'Email'}>Email:</label>
            <input type={"email"} id={'Email'} onChange={(e) => setEmail(e.target.value)} className={'Registration-form__input'}/>

            <label className={'Registration-form__label'} htmlFor={'Password'}>Password:</label>
            <input type={"password"} id={'Password'} onChange={(e) => setPassword(e.target.value)} className={'Registration-form__input'}/>

            <ConfirmButton type={"submit"} classname={'button-submit__registration-config'}>Войти</ConfirmButton>
        </form>
    );
};

export default Login;