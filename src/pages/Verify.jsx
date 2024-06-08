import React, {useState} from 'react';
import {verifyPOST} from "../Api";
import {useNavigate} from "react-router-dom";
import ConfirmButton from "../components/ConfirmButton";
import '../styles/RegistrationLoginForm.css';
import '../styles/ButtonSubmit.css';

const Verify = () => {
    const [email_verification_token, setEmail_verification_token] = useState('');
    const navigate = useNavigate();

    const handlerSubmit =  (e) => {
        e.preventDefault();

        if (!email_verification_token.length) return;

        const token = {
            email_verification_token
        }

        verifyPOST(token).then((response) => {
            navigate('/main');
        }).catch(e => {
            console.log(e);
        });
    }

    return (
        <form onSubmit={handlerSubmit} className={'Registration-form'}>
            <h1 className={'Registration-form__title'}>
                Подтверждение почты
            </h1>
            <label className={'Registration-form__label'} htmlFor={'CODE'}>КОД:</label>
            <input type={"text"} id={'CODE'} className={'Registration-form__input'} onChange={(e) => setEmail_verification_token(e.target.value)}/>
            <ConfirmButton type={"submit"} classname={'button-submit__registration-config'}>отправить</ConfirmButton>
        </form>
    );
};

export default Verify;