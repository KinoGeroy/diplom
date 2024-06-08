import React from 'react';
import WelcomePage from "./pages/WelcomePage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import Verify from "./pages/Verify";
import Main from "./pages/Main";
import Login from "./pages/Login";
import {ResponseInterceptor} from "./ResponseInterceptor";
import Subscriptions from "./pages/Subscriptions";
import './styles/App.css';
import SubscriptionType from "./components/SubscriptionType";
import Project from "./pages/Project";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <ResponseInterceptor/>
                <Routes>
                    <Route path="/" element={<WelcomePage/>}/>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/verify" element={<Verify/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path={"/project"} element={<Project/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/subscriptions" element={<Subscriptions/>}/>
                    <Route path="/sub" element={<SubscriptionType/>}/>
                    <Route path="*" element={<h1>Ошибка 404. Страница не существует.</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
