import {LS_TOKEN} from "./constants";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getUser} from "./Api";

const IsToken = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     getUser().then((response) => {
    //         console.log(response);
    //     });
    //
    // },[]);

    if (!localStorage.getItem(LS_TOKEN)) {
        navigate('/');
        console.log('no token login')
    }
    return;
}
