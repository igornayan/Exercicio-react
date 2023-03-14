import React from "react";
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import Exemplo01 from "./pages/Exemplo01"

const routes = 
[
    { path: '/', element: <HomePage /> },
    { path: '/login', element: <LoginPage /> },
    { path: '/exemplo01', element: <Exemplo01 /> }
];

export default routes;