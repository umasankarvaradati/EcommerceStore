import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filterData: "All",
};

const FilterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, action) => {
            state.filterData = action.payload;
        }
    },
});

export const { addFilter } = FilterSlice.actions;
export default FilterSlice.reducer;