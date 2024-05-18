import React from 'react';
import WelcomePage from "./pages/WelcomePage";
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import welcomePage from "./pages/WelcomePage";
import Registration from "./pages/Registration";
import Verify from "./pages/Verify";
import User from "./pages/User";
import Main from "./pages/Main";
import Login from "./pages/Login";
import {ResponseInterceptor} from "./ResponseInterceptor";

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
                {/*<Route path="/second" element={}/>*/}

            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
