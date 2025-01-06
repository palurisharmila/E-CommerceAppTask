import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name:'todos',
    initialState:{
        loading:false,
        items:[],
        error:null,
    },
    reducers:{
        fetchTodosRequest:(state)=>{
            state.loading=true;
        },
        fetchTodosSuccess:(state,action)=>{
            state.loading=false;
            state.items=action.payload;
        },
        fetchTodosFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
            
        }
    }
});
export const {fetchTodosRequest,fetchTodosSuccess,fetchTodosFailure}=todosSlice.actions;
export default todosSlice.reducer;