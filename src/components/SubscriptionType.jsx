import React, {useEffect, useState} from 'react';
import {getSubscriptions} from "../Api";
import {useNavigate} from "react-router-dom";
import {LS_TOKEN} from "../constants";

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
        <div>
            {subs.map((sub) => (
                <form key={sub.id} onSubmit={handleSubmit}>
                    <span>
                        тип подписки {sub.name}
                    </span>
                    <span>
                        цена: {sub.price}
                    </span>
                    <p>
                        Описание: {sub.description}
                    </p>
                    <button type={"submit"} onClick={() => {setId(sub.id)}}>
                        купить
                    </button>
                </form>
            ))}
        </div>
    );
};

export default SubscriptionType;