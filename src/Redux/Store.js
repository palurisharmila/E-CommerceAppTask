import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './AsyncActions';
import themeReducer from './ThemeStore';
import shoppingReducer from './CartStore';
import productReducer from '../E-Commerce/Slices/ProductSlice'; 

const store = configureStore({
    reducer: {
        todos: todosReducer,
        Theme:themeReducer,
        ShoppingCart:shoppingReducer,
        products:productReducer,

    },
});



export default store;