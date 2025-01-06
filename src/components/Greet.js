import react from "react";
// function Greet(){
//     return <h1>Hello Sharmila!!</h1>
// }

const Greet=(props)=>{
    console.log(props)
    return (
        <div>
        <h1>Hello {props.name}</h1>
        {props.children}
        </div>
    )  
}
export default Greet;