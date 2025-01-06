import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts,fetchByCategory } from "./ProductFetch";

const initialState={
    product:[],
    loading:false,
    error:null,
}
const productSlice = createSlice({
    name:'products',
    initialState,
    reducer:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload;
            console.log('Fetched Products:', action.payload); 
        })

        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })

        .addCase(fetchByCategory.pending,(state)=>{
            state.loading=true;
            state.error=null;
        })

        .addCase(fetchByCategory.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload;
            console.log('Fetched Category Products:', action.payload); // Debug log
        })

        .addCase(fetchByCategory.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message
        })
    },
});

export default productSlice.reducer;