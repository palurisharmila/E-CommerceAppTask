import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchTodos } from './ThunkFunction';

const TodoList=()=>{
    const dispatch=useDispatch();
    const { items , loading , error } = useSelector((state) => state.todos);
  
    useEffect(()=>{
        dispatch(fetchTodos());
    },[dispatch]);

    if(loading){
        return(
            <p>loading....</p>
        )
    } 
    if(error) return <p>Error:{error}</p>

    return(
        <ol>
            {items.map((todo)=>(
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ol>
    )
};

export default TodoList;