import React, { PureComponent } from 'react'
 class RefDemos extends PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
    // this.cbRef=null
    // this.setCbRef=(element)=>{
    //     this.cbRef=element
    // }
  }
  componentDidMount(){
     this.inputRef.current.focus()
    console.log(this.inputRef)
    // if(this.cbRef){
    //     this.cbRef.focus()
    // }
  }

  render() {
    return (
      <div  >
        <input type='text'/>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setCbRef}/>
        
         {/* <div className='i1'>This is div</div>
         <button className='b1'>CLick me</button> */}

      </div>
    )
  }
}

export default RefDemos
