import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk( 'products/fetchAll',async()=>{
    const response= await fetch('https://dummyjson.com/products?limit=200')
    if(!response.ok){
        throw new Error("Unable to Fetch Products")
    }
    const data = await response.json();
    return data.products;
    
});

export const fetchByCategory = createAsyncThunk('products/fetchByCategory',async(category)=>{
    const response= await fetch(`https://dummyjson.com/products/category/${category}`)
    if(!response.ok){
        throw new Error(`Unable to fetch ${category} products`)
    }
    const data = await response.json();
    return data.products;
});