import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Authenticate/authSlice';
import cartReducer from '../features/Cart/cartSlice';
import productReducer from '../features/Products/productSlice';
import filterReducer from '../features/FilterOption/FilterSlice';

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        filter: filterReducer,
    },
});

export default store;
