import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
 class ParentComponent extends Component {
    constructor(props){
         super(props);
         this.state={
            Name:"John"
         }
         this.greetHandler=this.greetHandler.bind(this);
         this.alertHandler=this.alertHandler.bind(this);
    }
    greetHandler(){
        this.setState({
            Name:"Geetha"
        })
    }
    alertHandler(childname){
        alert(`Hello ${this.state.Name} from ${childname}`)
    }
  render() {
    return (
      <div>
        <div>{this.state.Name}</div>
        <ChildComponent greetAttribute={this.greetHandler} alertAttribute={this.alertHandler} ></ChildComponent>
      </div>
    )
  }
}

export default ParentComponent
