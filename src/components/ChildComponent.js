import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>{props.greetAttribute(); props.alertAttribute('child')}} > Click</button>
    </div>
  )
}

export default ChildComponent
