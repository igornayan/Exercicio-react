import React from "react"
import { Link } from "react-router-dom"

function HomePage() 
{
    return(
        <div>
            <nav>
                <ul className="flex items-center space-x-5 bg-slate-400">
                    <li><Link className="underline text-blue-700" to="/">
                <img className="h-10 cursor-pointer ml-5" src="/moura logo.png" alt="" />
                </Link>
                    </li>
                    <li><Link to="/login">Página de login</Link></li>
                    <li><Link to="/timer">Timer</Link></li>
                    <li><Link to="/formulario">Formulário</Link></li>
                    <li></li>
                </ul>
            
            </nav>
        </div>
    )
}

export default HomePage