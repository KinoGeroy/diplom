import React, {useState} from 'react';
import {verifyPOST} from "../Api";
import {useNavigate} from "react-router-dom";

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
        });
    }

    return (
        <form onSubmit={handlerSubmit}>
            <label>КОД:</label>
            <input type={"text"} onChange={(e) => setEmail_verification_token(e.target.value)}/>
            <button type={"submit"}>отправить</button>
        </form>
    );
};

export default Verify;