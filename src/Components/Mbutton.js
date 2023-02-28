import React from "react";

export class Minus extends React.Component {
    constructor(props){
        super(props)
        this.state={count:this.props};
    }
    
    funcminus=()=>{//Update Click -
        if(this.state.count > 1){
            this.setState({count: this.state.count - 1});
            this.props.minusCallback(this.state.count); 
        }
        else{
            this.setState({count: 0});
            this.props.minusCallback("MIN"); 
        }
    };

    render() {
        return(
            <button onClick = {this.funcminus}>Click to UnVote</button>  
        )
    }
}

export default Minus;