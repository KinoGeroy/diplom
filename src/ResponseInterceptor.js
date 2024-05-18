import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import api from "./Api";

export const ResponseInterceptor = () => {
    const navigate = useNavigate();
    const interceptorId = useRef(null);

    useEffect(() => {
        interceptorId.current = api.interceptors.response.use(
            undefined,
            (error) => {
                switch (error.response.status) {
                    case 401:
                        Cookies.remove("token");
                        localStorage.removeItem("userData");
                        navigate("/");
                        break;
                    case 403:
                    // your processing here
                    default:
                        return Promise.reject(error);
                }
            }
        );
    }, [navigate]);

    return null;
};