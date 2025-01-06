import React,{Component} from 'react'

class Welcome extends Component{
    render(){
        return <h1>Class Component</h1>
    }
}

class First extends Component{
  render(){
      return(
          <div>
              <h1>JAVASCRIPT</h1>
              <p>The class component is only JAVASCRIPT component</p>
          </div>
      )
  }
}
class Second extends Component{
  render(){
      return(
          <div>
              <h1>ReactFile</h1>
              <p>The function component is only React component</p>
          </div>
      )
  }
}

export default Welcome;
export {First,Second};
