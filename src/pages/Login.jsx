import React, {useState} from 'react';
import {loginPOST, sendPOST} from "../Api";
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";

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
                navigate('/main')
            }
            // const token = response.data.token;
            // localStorage.setItem(LS_TOKEN, token);
            // navigate('/main');
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label>Email:</label>
            <input type={"email"} onChange={(e) => setEmail(e.target.value)}/>

            <label>Password:</label>
            <input type={"password"} onChange={(e) => setPassword(e.target.value)}/>

            <button type={"submit"}>Войти</button>
        </form>
    );
};

export default Login;