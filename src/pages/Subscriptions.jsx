import React, {useState} from 'react';
import {subscriptionPOST} from "../Api";
import {useLocation, useNavigate} from "react-router-dom";
import ConfirmButton from "../components/ConfirmButton";

const Subscriptions = () => {
    const [months, setMonths] = useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    const id = data.id;
    const price = data.subs.find((sub) => sub.id === id);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            id,
            months
        }
        subscriptionPOST(formData).then((response) => {
            navigate('/main');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Выбирете количество месяцев:
            </label>
            <input type={"number"} onChange={(e) => setMonths(e.target.value)}/>
            <p key={data.id}>
                Ваша подписка будет стоить: {price.price * months}
            </p>

            <ConfirmButton type={'submit'}>
                купить
            </ConfirmButton>
        </form>
    );
};

export default Subscriptions;