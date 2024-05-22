import { createAsyncThunk } from "@reduxjs/toolkit";

const GetInitialImagesThunk = createAsyncThunk("Search/GetInitialImages", async () => {
    try {
        const request = await fetch('https://api.unsplash.com/photos?per_page=20',
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

export default GetInitialImagesThunk;