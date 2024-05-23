import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        status: 'idle',
        data: JSON.parse(localStorage.getItem('favorites')) || [],
        error: null
    },
    reducers: {
        addFavorite: (state, action) => {
            state.data.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.data));
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(image => image.id !== action.payload.id);
            localStorage.setItem('favorites', JSON.stringify(state.data));
        }
    }
})

export default FavoritesSlice;
export const { addFavorite, removeFavorite, sortFavorites } = FavoritesSlice.actions;