import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetInitialImagesThunk = createAsyncThunk("Search/GetInitialImages", async (pageNumber) => {
    try {
        const request = await fetch(`https://api.unsplash.com/photos?page=${pageNumber}&per_page=20`,
            {
                method: 'GET',
                headers: {'Authorization': 'Client-ID WUIf-dHIq-KxSKQz1So92KwdAmWrxigCMcuZN5RhhNM'}
            }
        );
        if (request.ok) {
            const Images = await request.json();
            return Images;
        }
        return false;
    }
    catch (error) {
        console.log(error);
    }
})

export const GetSearchedImagesThunk = createAsyncThunk('Search/GetSearchedImages', async (term) => {
    try {
        const request = await fetch(`https://api.unsplash.com/search/photos?query=${term}`,
            {
                method: 'GET',
                headers: {'Authorization': 'Client-ID WUIf-dHIq-KxSKQz1So92KwdAmWrxigCMcuZN5RhhNM'}
            }
        );
        if (request.ok) {
            const SearchedImages = await request.json();
            console.log(SearchedImages);
            return SearchedImages.results;
        }
        return false;
    }
    catch (error) {
        console.log(error);
    }
})
