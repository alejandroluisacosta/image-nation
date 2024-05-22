import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from '../Features/Search/SearchSlice';

const Store = configureStore({
    reducer: {
        Search: SearchSlice.reducer
    }
})

export default Store;