import React from "react"
import { Link } from "react-router-dom"
import Timer from "../components/Timer"

function HomePage() 
{
    return (
        <>
            <h1>Página inicial</h1>
            <Timer start = {0} />
            <Link to="/login">Página de login</Link>
        </>
    )
}

export default HomePage