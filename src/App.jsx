import React from 'react';
import WelcomePage from "./pages/WelcomePage";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Registration from "./pages/Registration";
import Verify from "./pages/Verify";
import User from "./pages/User";
import Main from "./pages/Main";
import Login from "./pages/Login";
import {ResponseInterceptor} from "./ResponseInterceptor";
import Subscriptions from "./pages/Subscriptions";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <ResponseInterceptor/>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/verify" element={<Verify/>}/>
                <Route path="/user" element={<User/>}/>
                <Route path="/main" element={<Main/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/subscriptions" element={<Subscriptions/>}/>
                <Route path="*" element={<h1>Ошибка 404. Страница не существует.</h1>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
