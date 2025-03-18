import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CART_API_URL, CART_GET_URL } from '../../../assets/fetchAPIS';

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: -1,
    loading: false,
    error: null
};

export const fetchItems = createAsyncThunk("cart/fetchItems", async (token) => {
    try {
        const response = await fetch(CART_GET_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
        });
        if (!response.ok) throw new Error("Failed to fetch items");
        const data= await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
});

export const addCart = createAsyncThunk('cart/addCart', async ({cartItem,token}) => {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem) // Send the cart item data
        });
        if (!response.ok) throw new Error("Failed to add item");
        const response1 = await fetch(CART_GET_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
        });
        if (!response1.ok) throw new Error("Failed to fetch items");
        const data = await response1.json();
        return data;
    } catch (error) {
        return error.message;
    }
});

export const deleteCart = createAsyncThunk('cart/deleteCart', async ({cartItem,token}) => {
    try {
        const response = await fetch(CART_API_URL, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItem) // Send the cart item data
        });
        if (!response.ok) throw new Error("Failed to add item");
        const response1 = await fetch(CART_GET_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token}),
        });
        if (!response1.ok) throw new Error("Failed to fetch items");
        const data = await response1.json();
        return data;
    } catch (error) {
        return error.message;
    }
});



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        emptyCart: (state) => {
            state.items = [];
            state.totalPrice = 0;
            state.totalQuantity = -1;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.totalPrice = action.payload.TotalPrice; // TotalPrice
                state.totalQuantity = action.payload.TotalQuantity;  //TotalQuantity 
            })
            .addCase(fetchItems.pending, (state, action) => {
                state.loading = true;
                state.error = null;
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.totalPrice = action.payload.TotalPrice; // TotalPrice
                state.totalQuantity = action.payload.TotalQuantity;  //TotalQuantity 
            })
            .addCase(addCart.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.data;
                state.totalPrice = action.payload.TotalPrice; // TotalPrice
                state.totalQuantity = action.payload.TotalQuantity;  //TotalQuantity 
            })
            .addCase(deleteCart.pending, (state, action) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const { emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
