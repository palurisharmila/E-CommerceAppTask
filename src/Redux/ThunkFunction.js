import { fetchTodosFailure, fetchTodosRequest, fetchTodosSuccess } from "./AsyncActions"

export const fetchTodos=()=>async(dispatch)=>{
    dispatch(fetchTodosRequest());

    try{
        const response= await fetch('https://jsonplaceholder.typicode.com/todos');
        const data=await response.json();
        dispatch(fetchTodosSuccess(data));
    }
    catch(error){
        dispatch(fetchTodosFailure(error.toString()));
    }
}

