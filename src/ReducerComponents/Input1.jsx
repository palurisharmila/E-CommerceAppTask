import React,{useReducer} from 'react'

const Input1Reducer = (state,action)=>{
    switch (action.type){
        case 'SET_NUM1':
            return action.payload;
        default:
            return state;
    }
};

const Input1 = ({setNum1}) => {
    const [num1,dispatch] = useReducer(Input1Reducer,'');

    const handleChange = (e) =>{
        const value = Number(e.target.value);
        dispatch({type:'SET_NUM1',payload:value});  
        setNum1(value);
    }
  return (
    <div>
      <input
      type='number'
      placeholder='Enter the NUm1'
      value={num1}
      onChange={handleChange}
      className='input_field'
      />
    </div>
  )
}

export default Input1


