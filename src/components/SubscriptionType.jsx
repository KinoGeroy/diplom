import React, {useEffect, useState} from 'react';
import {getSubscriptions} from "../Api";
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";
import '../styles/SubscriptionType.css';
import '../styles/ButtonSubmit.css';
import ConfirmButton from "./ConfirmButton";

const SubscriptionType = () => {
    const [subs, setSubs] = useState([]);
    const [id, setId] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        getSubscriptions().then((response) => {
            if (response.data && response.data.length) {
                setSubs(response.data);
            }
        }).catch(error => {
            console.log(error, "subType");
        });

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!localStorage.getItem(LS_TOKEN)) {
            navigate('/login');
            return;
        };

        const formData = {
            id,
            subs
        }

        navigate('/subscriptions', { state: formData });
    }

    return (
        <div className={'subscriptions-container'}>
            <h2 className={'subscriptions-container__title'}>
                Выбирете тип подписки!
            </h2>
            {subs.map((sub) => (
                <form key={sub.id} onSubmit={handleSubmit} className={'subscription-container'}>
                    <span className={'subscription-container__type'}>
                        Тип подписки - {sub.name}
                    </span>
                    <span>
                        Цена услуги - {sub.price}
                    </span>
                    <p>
                        {sub.description}
                    </p>
                    <ConfirmButton type={"submit"} onClick={() => {setId(sub.id)}}>
                        купить
                    </ConfirmButton>
                </form>
            ))}
        </div>
    );
};

export default SubscriptionType;