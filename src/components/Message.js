import React, { Component } from "react";
class Message extends Component{
    constructor(){
        super();
        this.state={
            message:'Welcome Visitor'
        }
    }

    changetext(){
        this.setState({
            message:"Thank you..."
        })
    }



    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{
                    this.changetext()
                }}>Click me!!</button>
            </div>
        )
            
        
    }
}

export default Message;