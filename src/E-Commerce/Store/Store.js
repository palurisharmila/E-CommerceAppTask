import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../Slices/ProductSlice'; 
import cartReducer from '../Slices/CartSlice'

const store = configureStore({
    reducer: {
        products: productReducer,
        cart:cartReducer,
    },
});

export default store;