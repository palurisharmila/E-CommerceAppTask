import React,{useReducer} from 'react'

const Input2Reducer = (state,action)=>{
    switch (action.type){
        case 'SET_NUM2':
            return action.payload;
        default:
            return state;
    }
};

const Input2 = ({setNum2}) => {
    const [num2,dispatch] = useReducer(Input2Reducer,'');

    const handleChange = (e) =>{
        const value = Number(e.target.value);
        dispatch({type:'SET_NUM2',payload:value});
        setNum2(value);
    }
  return (
    <div>
      <input
      type='number'
      placeholder='Enter the NUm1'
      value={num2}
      onChange={handleChange}
      className='input_field'
      />
    </div>
  )
}

export default Input2
