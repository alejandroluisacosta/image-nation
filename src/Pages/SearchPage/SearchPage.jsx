import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ImageComponent from "../../Components/ImageComponent/ImageComponent";
import Navbar from "../../Components/Navbar/Navbar";
import './SearchPage.css';
import React, { useEffect, useState } from 'react';
import Input from '@mui/joy/Input';
import { useDispatch, useSelector } from "react-redux";
import GetInitialImagesThunk, { GetSearchedImagesThunk } from "../../Features/Search/SearchThunk";
import { CircularProgress } from "@mui/joy";
import { addFavorite } from "../../Features/Favorites/FavoritesSlice";

const SearchPage = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const Images = useSelector(state => state.Search.data);
    const ImagesStatus = useSelector(state => state.Search.status);
    const ImagesError = useSelector(state => state.Search.error);
    const dispatch = useDispatch();

    const searchSubmitHandler = (event) => {
        if (event.key === 'Enter') {
            if(event.target.value !== ""){
                dispatch(GetSearchedImagesThunk(event.target.value));
                if (ImagesStatus === 'pending')
                    setLoading(true);
                else if (ImagesStatus === 'fulfilled') {
                    setLoading(false);
                    setImages(Images);
                }
            }
            else
                dispatch(GetInitialImagesThunk());
        }
    }

    useEffect(() => {
        if (ImagesStatus === 'idle')
            dispatch(GetInitialImagesThunk());
        else if (ImagesStatus === 'pending')
            setLoading(true);
        else if (ImagesStatus === 'fulfilled') {
            setLoading(false);
            setImages(Images);
        }
    }, [Images, ImagesStatus, dispatch])

    return <>
        <header className="header">
            <Navbar className="header__navbar navbar"/>
            <div className="header__content">
                <h2 className="header__title">High-quality images</h2>
                <p className="header__subtitle">for high-quality projects</p>
                <Input className="header__search-bar" placeholder="Search" onKeyDown={searchSubmitHandler}/>
            </div>
        </header>
        {loading ?
        <CircularProgress />
        :
        <>
        <div className="image-list">
            {images.map((image, index) => (
                <>
                <ImageComponent isSearchPage={true} id={image.id} authorName={image.user.name} image={image.urls.small} downloadLink={image.urls.full} key={index}/>
                </>
            ))}
        </div>
        <Footer className="footer"/>
        </>
        }
        </>
}

export default SearchPage;

