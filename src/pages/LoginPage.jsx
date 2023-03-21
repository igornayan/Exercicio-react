import React from "react"
import { Link } from "react-router-dom"

function LoginPage() 
{
    return(
        <div className="flex flex-col h-screen">

            <div className="h-14 flex items-center">
                <Link className="underline text-blue-700" to="/">
                <img className="h-10 cursor-pointer ml-5" src="/moura logo.png" alt="" />
                </Link>
            </div>

            <div className="grow bg-gray-100 flex flex-col items-center justify-center">
                <div className="relative w-1/4 flex flex-col items-center justify-center">
                    <img className="w-1/3 mb-5" src="/Moura logo 2.png" alt="" />
                    <p className="fonte text-4xl mb-28 font-semibold">Entre com sua conta</p>
                    <input className="h-12 w-full mb-1.5 rounded-md  p-2.5" type="text" placeholder="Email"></input>
                    <input className="h-12 w-full rounded-md p-2.5" type="password" placeholder="Senha"></input>
                    <button className="w-full h-11 mt-14 bg-blue-700 rounded-md text-white">Entrar</button>
                    <p className="absolute right-0 bottom-16 text-blue-700 cursor-pointer">Esqueceu a senha ?</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage