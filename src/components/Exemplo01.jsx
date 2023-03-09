import React from "react";
import ReactDOM from "react-dom/client";

class Timer extends React.Component 
{
    constructor(props)
    {
        super(props)
        this.state = {seconds: 0}
        seconds: this.props.start
    }

    contar()
    {
        this.setState(state => ({seconds: state.seconds + 1}))
    }
    
    render()
    {
        return <h1>Timer</h1>
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
          <div>
            <h1> Segundos: {this.state.seconds} </h1>
          </div>
        );
    }
}

export default Timer