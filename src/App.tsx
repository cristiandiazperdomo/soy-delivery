import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Home} from "./pages/Home/Home";
import {AboutUs} from "./pages/AboutUs/AboutUs";
import {Services} from "./pages/Services/Services";
import {Login} from "./pages/Login/Login";
import {SignUp} from "./pages/SignUp/SignUp";
import {DashboardDelivery} from "./pages/DashboardDelivery/DashboardDelivery";
import {TrackOrder} from "./pages/TrackOrder/TrackOrder";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre-nosotros" element={<AboutUs />}></Route>
                <Route path="/servicios" element={<Services />}></Route>
                <Route path="/entrar" element={<Login />}></Route>
                <Route path="/registrarse" element={<SignUp />}></Route>
                <Route
                    path="/rastrear-orden/:id"
                    element={<TrackOrder />}
                ></Route>
                <Route
                    path="/dashboard"
                    element={<DashboardDelivery />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
