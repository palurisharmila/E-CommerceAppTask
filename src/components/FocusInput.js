import React, { Component, createRef } from 'react'
import Input from './Input'

 class FocusInput extends Component {
    constructor(props) {
      super(props)

      this.parentFocus =React.createRef()
    }
    clickHandler=()=>{
        this.parentFocus.current.focusInput();
    }
    
  render() {
    return (
      <div>
        <Input ref={this.parentFocus}/>
        <button onClick={this.clickHandler}>Change FOcus</button>
      </div>
    )
  }
}

export default FocusInput
