import React, { Component } from "react";
import './CompStyle.css';

export class Click extends Component {
    constructor(props){
        super(props)

        this.state={
            count:0
        };
    }

    plus=()=>{//Update Click +
        if(this.state.count < 10){
            this.setState({count: this.state.count + 1});  
        }
        else{
            this.setState({count: 10});
        }
    };

    minus=()=>{//Update Click -
        if(this.state.count > 1){
            this.setState({count: this.state.count - 1});
        }
        else{
            this.setState({count: 0});
        }
    };

    render() {
        const {count} = this.state;
        return(
            <div className="button">
                <button onClick={this.plus}> + </button>
                <p>{count}</p>
                <button onClick={this.minus}> - </button>
            </div>
        );
    }
}

export default Click;