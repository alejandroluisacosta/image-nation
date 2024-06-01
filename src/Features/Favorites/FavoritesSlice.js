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
            if (!state.data.some(image => image.id === action.payload.id)) {
                state.data.push(action.payload);
                localStorage.setItem('favorites', JSON.stringify(state.data));
            }
        },
        removeFavorite: (state, action) => {
            state.data = state.data.filter(image => image.id !== action.payload.id);
            localStorage.setItem('favorites', JSON.stringify(state.data));
        },
        modifyDescription: (state, action) => {
            const prevState = [...state.data];

            state.data.map((image, index) => {
                if (image.id === action.payload.id)
                    image.description = action.payload.description;
                return image; 
            })

            const modifiedDescriptions = state.data.filter((image, index) => {
                return prevState[index].description !== image.description;
            });

            if (modifiedDescriptions.length > 0) {
                notifyModification();
            }
            
            localStorage.setItem('favorites', JSON.stringify(state.data));
            return state;
        }
    }
})

export default FavoritesSlice;
export const { addFavorite, removeFavorite, modifyDescription } = FavoritesSlice.actions;