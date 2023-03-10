import React from "react";
import ReactDOM from "react-dom/client";
import Timer from "./components/Exemplo01";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<div>   
    <Timer start = {0}></Timer>
</div>
)