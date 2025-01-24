import React from 'react'
import Input1 from './Input1'
import Input2 from './Input2'
import Result from './Result'
import { useReducer } from 'react';
import { useState } from 'react';

const resultReducer = (state,action) =>{
    switch(action.type){
        case 'CALCULATE':
            return action.payload;
        default :
        return state;
    }
};
const Reducer = () => {
    const [ result,dispatch] = useReducer(resultReducer,null);
    const[num1,setNum1] = useState('');
    const[num2,setNum2] = useState('');
    const handleCalculate = ()=>{
        const sum = Number(num1)+Number(num2);
        dispatch({type:'CALCULATE' , payload:sum})
    };


  return (
    <div>
      <h1>Calculator</h1>
      <Input1 setNum1={setNum1}/>
      <Input2 setNum2={setNum2}/>
      <h3>+</h3>
      <Result result={result}/>
      <button onClick={handleCalculate}>Calculate</button>

    </div>
  )
}

export default Reducer
