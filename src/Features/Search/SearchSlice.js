import { createSlice } from "@reduxjs/toolkit";
import GetInitialImagesThunk, { GetSearchedImagesThunk } from "./SearchThunk";

const SearchSlice = createSlice({
    name: 'Search',
    initialState: {
        status: 'idle',
        data: [{placeholderValue: ""}],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(GetInitialImagesThunk.pending, state => {
            state.status = 'pending';
            state.error = false;
        })
        .addCase(GetInitialImagesThunk.rejected, state => {
            state.status = 'rejected';
            state.error = true;
        })
        .addCase(GetInitialImagesThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = false;
            state.data = action.payload;
        })
        .addCase(GetSearchedImagesThunk.pending, state => {
            state.status = 'pending';
            state.error = false;
        })
        .addCase(GetSearchedImagesThunk.rejected, state => {
            state.status = 'rejected';
            state.error = true;
        })
        .addCase(GetSearchedImagesThunk.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.error = false;
            state.data = action.payload;
        })
    }
})

export default SearchSlice;