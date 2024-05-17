import React, {useState} from 'react';
import {sendPOST} from "../Api";

const Verify = () => {
    const [email_verification_token, setEmail_verification_token] = useState('');

    const handlerSubmit =  (e) => {
        e.preventDefault();

        if (!email_verification_token.length) return;


        const token = {
            email_verification_token
        }

        sendPOST(token).then((response) => {
            console.log(response);
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