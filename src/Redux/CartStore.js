import {createSlice} from "@reduxjs/toolkit";


const Slice= createSlice({
    name:"ShoppingCart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeItem:(state,action)=>{
            return state.filter(item=>item.id!==action.payload);
        }
    }
});

export const {addItem,removeItem} = Slice.actions;


export default Slice.reducer;

