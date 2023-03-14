import React from "react";
import ReactDOM from "react-dom/client";


class Timer extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = {
            seconds: 0,
            running: true
        }
    }

    contar()
    {
        if(this.state.running)
        this.setState(state => ({
            seconds: state.seconds + 1,
            running: true
        }))
    }
    
    startStop()
    {
        this.setState(state => ({
            seconds: state.seconds + 1,
            running: true
        }))
    }

    componentDidMount() 
    {
        this.interval = setInterval(() => this.contar(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.interval);
    }

    render() 
    {
        return (
        <>
        <div className="bg-black w-96 h-16 m-4 border-4 border-yellow-500 rounded-2xl flex flex-col justify-center items-center ">
            <h1 className="text-yellow-400 text-4xl cronometro">
            Segundos: {this.state.seconds} </h1>
        </div>
        <div className="w-96 ml-10 m-4 space-x-14">
            <button onClick={this.startStop} className="ml-5 p-1.5 border-2 bg-yellow-500"> Iniciar/Pausar </button>
            <button className="bg-yellow-500 w-28 ml-5 p-1.5 border-2"> Zerar </button>
        </div>
        </>
        )
    }
}

export default Timer