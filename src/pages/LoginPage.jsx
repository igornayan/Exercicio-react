import React from "react"
import { Link } from "react-router-dom"

function LoginPage() 
{
    return(
        <div className="flex flex-col h-screen">

            <div className="h-14 flex items-center">
                <Link className="underline text-blue-700" to="/">
                <img className="h-10 cursor-pointer" src="/moura logo.png" alt="" />
                </Link>
            </div>

            <div className="grow bg-gray-100 flex flex-col items-center">
                <p className="text-3xl fonte mt-36">Entre com sua conta</p>
            </div>
        </div>
    )
}

export default LoginPage