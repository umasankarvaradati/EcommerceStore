import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PRODUCT_API_URL } from '../../../assets/fetchAPIS';

const initialState = {
    storeProducts: [],
    loading: false,
    error: null,
};

// Define fetchProducts as a thunk
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch(PRODUCT_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
});
export const getProducts = createAsyncThunk('products/getProducts', async (category) => {
    try{
        const response = await fetch(PRODUCT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pc_category:category  }),
        });
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        const result = await response.json();
        return result.data;
    }catch(error){
        return error.message;
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.storeProducts = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Use action.error.message for error handling
            })
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.storeProducts = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Use action.error.message for error handling
            });
    },
});

export const { /* other actions */ } = productSlice.actions;
export default productSlice.reducer;
