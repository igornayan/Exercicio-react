import React from "react"
import Navbar from "../components/NavBar"
import formulario01 from "../components/Formulário1"

function Formulario()
{
    return(
        <>
        <Navbar />
        <div className="flex justify-center items-center">
        <formulario01 />
        </div>
        </>
    )
}

export default Formulario