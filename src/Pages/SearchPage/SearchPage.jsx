import ImageComponent from "../../Components/ImageComponent/ImageComponent";
import './SearchPage.css';
import React, { useEffect, useState } from 'react';
import Input from '@mui/joy/Input';
import { useDispatch, useSelector } from "react-redux";
import { GetInitialImagesThunk, GetSearchedImagesThunk } from "../../Features/Search/SearchThunk";
import { CircularProgress } from "@mui/joy";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import NavbarComponent from "../../Components/NavbarComponent/NavbarComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaginationComponent from "../../Components/PaginationComponent/PaginationComponent";

const SearchPage = () => {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [imageAdded, setImageAdded] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);
    const Images = useSelector(state => state.Search.data);
    const ImagesStatus = useSelector(state => state.Search.status);
    const ImagesError = useSelector(state => state.Search.error);
    const dispatch = useDispatch();    
    
    const notify = () => {
        toast.success("Image added successfully", {
            position: 'top-center',
            hideProgressBar: true
        })
    }

    const nextPageHandler = () => {
        dispatch(GetInitialImagesThunk(currentPage + 1));
        setCurrentPage(currentPage + 1);
    }

    const previousPageHandler = () => {
        dispatch(GetInitialImagesThunk(currentPage - 1));
        setCurrentPage(currentPage - 1);
    }

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
            dispatch(GetInitialImagesThunk(1));
        else if (ImagesStatus === 'pending')
            setLoading(true);
        else if (ImagesStatus === 'fulfilled') {
            setLoading(false);
            setImages(Images);
        }
    }, [Images, ImagesStatus, dispatch])

    useEffect(() => {
        if (imageAdded) {
            notify();
            setImageAdded(false);
        }
    }, [imageAdded]);

    console.log(currentPage)
    return <>
        <header className="header">
            <NavbarComponent className="header__navbar navbar"/>
            <div className="header__content">
                <h2 className="header__title">High-quality images</h2>
                <p className="header__subtitle">for high-quality projects</p>
                <Input
                    className="header__search-bar"
                    startDecorator={
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    }
                    placeholder="Search"
                    onKeyDown={searchSubmitHandler}
                />
            </div>
        </header>
        {loading ?
        <div className="circular-progress-container">
            <CircularProgress className="circular-progress-container__icon"/>
        </div>
        :
        <>
        <div className="image-list">
            {images.map((image, index) => (
                <>
                <ImageComponent 
                isSearchPage={true}
                id={image.id}
                authorName={image.user.name}
                image={image.urls.small}
                description={image.alt_description}
                width={image.width} height={image.height}
                likes={image.likes}
                date={image.created_at}
                downloadLink={image.urls.full}
                key={image.id}
                setImageAdded={setImageAdded}
                />
                </>
            ))}
        </div>
        <PaginationComponent 
            currentPage={currentPage}
            nextPageHandler={nextPageHandler}
            previousPageHandler={previousPageHandler}
        />
        <ToastContainer autoClose={500} />
        <FooterComponent className="footer"/>
        </>
        }
        </>
}

export default SearchPage;

