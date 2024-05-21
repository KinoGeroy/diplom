import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import api from "./Api";
import {LS_TOKEN} from "./constants";
import axios from "axios";

export const ResponseInterceptor = () => {
    const navigate = useNavigate();
    const interceptorId = useRef(null);

    useEffect(() => {
        interceptorId.current = axios.interceptors.response.use(
            undefined,
            (error) => {

                switch (error.response.status) {
                    case 401:
                        // localStorage.removeItem(LS_TOKEN);
                        navigate("/");
                        console.log(error);
                        break;
                    case 403:
                        console.log(error);
                        break;
                    case 409:
                        console.log('YOU ALREADY HAVE SUBSCRIPTION')
                        navigate("/main");
                        break;
                    default:
                        return Promise.reject(error);
                };
            }
        );
    }, [navigate]);

    return null;
};