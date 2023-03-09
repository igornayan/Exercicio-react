import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/Exemplo01";

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<div>   
    <Timer start = {0}></Timer>
    <Timer start = {100}></Timer>
</div>
)