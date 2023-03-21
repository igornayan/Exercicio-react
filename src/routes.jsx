import React from "react";
import Formulario from "./pages/FormulárioPage";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Counter from "./pages/TimerPage";

const routes = 
[
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/timer', element: <Counter /> },
    { path: '/formulario', element: <Formulario /> }
];

export default routes;