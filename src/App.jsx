import React from 'react';
import WelcomePage from "./pages/WelcomePage";
import {BrowserRouter, NavLink, Route, Routes} from 'react-router-dom';
import welcomePage from "./pages/WelcomePage";
import Registration from "./pages/Registration";
import Verify from "./pages/Verify";
import User from "./pages/User";

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/registration" element={<Registration/>}/>
                <Route path="/verify" element={<Verify/>}/>
                <Route path="/user" element={<User/>}/>
                {/*<Route path="/second" element={}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
