import React from "react"
import Navbar from "../components/NavBar"
import FormSteps from "../components/FormulárioSteps"

function Formulario()
{
    return(
        <>
        <Navbar />
        <div>
            <FormSteps />
        </div>
        </>
    )
}

export default Formulario