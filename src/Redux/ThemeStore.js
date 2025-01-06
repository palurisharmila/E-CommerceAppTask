import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    theme:"light"
}
const ThemeSlice = createSlice({
    name:"Theme",
    initialState,
    reducers:{
        toggleChange:(state)=>{
            state.theme= state.theme==="light"?"dark":"light"
        }
    }
});

export const {toggleChange} = ThemeSlice.actions;

export default ThemeSlice.reducer;