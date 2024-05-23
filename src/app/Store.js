import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from '../Features/Search/SearchSlice';
import FavoritesSlice from "../Features/Favorites/FavoritesSlice";

const Store = configureStore({
    reducer: {
        Search: SearchSlice.reducer,
        Favorites: FavoritesSlice.reducer
    }
})

export default Store;