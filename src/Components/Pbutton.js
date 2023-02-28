import React from "react";

export class Plus extends React.Component {
    constructor(props){
        super(props)
        this.state={count:this.props};
    }
    
    funcplus=()=>{//Update Click +
        if(this.state.count < 10){
            this.setState({count: this.state.count + 1}); 
            this.props.plusCallback(this.state.count); 
        }
        else{
            this.setState({count: 10});
            this.props.plusCallback("MAX");
        }
    };

    render() {
        return(
            <button onClick = {this.funcplus}>Click to Vote</button>  
        )
    }
}

export default Plus;