import React, {useState} from 'react';
import ConfirmButton from "../components/ConfirmButton";
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";

const Registration = () => {
    const navigate = useNavigate();//принудительный редерект
    const location = useLocation();//

    // location.pathname === '/main';

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (data) => {
        return await axios.post('http://31.128.36.9:81/api/register', data, {
            headers:
                {'Accept': 'application/json'}
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username,
            email,
            password,
        };
        // todo валидация
        // const errors = formValidation(formData);
        // если 0 ошибок ->
        handleRegister(formData).then((response) => {
            // axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            if (response?.data && response.data.token) {
                const token = response.data.token;
                console.log(token);
                localStorage.setItem(LS_TOKEN, token);

                //redirect на подтверждение
                navigate('/verify');
            }

        }).catch(error => {
            if (error.response.status === 409) {
                console.log("ПОЧТА УЖЕ ЗАРЕГЕСТРИРОВАНА");
            } else if (error.response.status === 404) {
                console.log("страница не найдена");
            }
            console.error(error);
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

            {/*<Link to={'/registration/verify'} >*/}
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
