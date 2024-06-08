import React, {useState} from 'react';
import ConfirmButton from "../components/ConfirmButton";
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import {registerPOST} from "../Api";
import '../styles/RegistrationLoginForm.css';
import '../styles/ButtonSubmit.css';

const Registration = () => {
    const navigate = useNavigate();

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
        console.log(!username, !password);
        if (!username || !password) return;

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
        <form onSubmit={handleSubmit} className={'Registration-form'}>
            <h1 className={'Registration-form__title'}>
                Регистрация
            </h1>

            <label htmlFor={'FIO'} className={'Registration-form__label'}>
                ФИО
            </label>
            <input type={"text"} onChange={(e) => setUsername(e.target.value)} id={'FIO'} className={'Registration-form__input'}/>
            <label htmlFor={'Email'} className={'Registration-form__label'}>
                Почта
            </label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)} id={'Email'} className={'Registration-form__input'}/>
            <label htmlFor={'Password'} className={'Registration-form__label'}>
                Пароль
            </label>
            <input type={"password"} onChange={(e) => setPassword(e.target.value)} id={'Password'} className={'Registration-form__input'}/>

            <ConfirmButton type={'submit'} classname={'button-submit__registration-config'}>
                Зарегистрироваться
            </ConfirmButton>
        </form>
    );
};

export default Registration;

//todo cors(система безопасности браузера)
// copilot
//disabled={location.pathname === '/main'} дизейбл кноки если путь = пути
