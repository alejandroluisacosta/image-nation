import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        status: 'idle',
        data: [{placeholderValue: ''}],
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(image => image.id !== action.payload.id);
        }
    }
})

export default FavoritesSlice;
export const { addFavorite, removeFavorite } = FavoritesSlice.actions;