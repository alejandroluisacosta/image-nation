import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './FavoritesPage.css';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavoritesPage = () => {

    
    const Favorites = useSelector(state => state.Favorites.data);
    const [renderedImages, setRenderedImages] = useState(Favorites);
    let ImagesFilteredByName = [];
    
    const notify = () => {
        toast.success("Image removed successfully", {
            position: 'top-center'
        })
    }
    const [imageRemoved, setImageRemoved] = useState(false);

    const filterByNameHandler = (event) => {
        ImagesFilteredByName = Favorites.filter(image => image.description.includes(event.target.value));
        setRenderedImages(ImagesFilteredByName);
    };

    const filterByPropertyHandler = (event, value) => {
        const sortedImages = [...renderedImages]; 
        setRenderedImages(sortedImages.sort((a, b) => a[value] - b[value]));
      };

      useEffect(() => {
        setRenderedImages(Favorites);
        setImageRemoved(true);
        notify();
      }, [Favorites])
      
    return (
        <>
        <div className='favorites__header'>
        <NavbarComponent className={"navbar navbar--favorites"}/>
        <h2 className="favorites__header__title">Favorites</h2>
        <Input className="favorites__header__input" onChange={filterByNameHandler}/>
        <p>Sort by</p>
        <Select className="favorites__header__select" onChange={filterByPropertyHandler} defaultValue="date">
            <Option value="date">Date</Option>
            <Option value="width">Width</Option>
            <Option value="height">Height</Option>
            <Option value="likes">Likes</Option>
        </Select>
        </div>
        <div className='image-list image-list--favorites'>
        {Favorites.length ? renderedImages.map((favoriteImage, index) => (
            <>
            <ImageComponent isSearchPage={false} id={favoriteImage.id} authorName={favoriteImage.authorName} image={favoriteImage.image} description={favoriteImage.description} width={favoriteImage.width} height={favoriteImage.height} likes={favoriteImage.likes} date={favoriteImage.created_at} downloadLink={favoriteImage.downloadLink} key={index}/>
            </>
        ))
        :
        <p>No favorite images</p>
        }
        </div>
        {imageRemoved ? <ToastContainer autoClose={1500}/> : <></>}
        <FooterComponent className="footer"/>
        </>
    )
}


export default FavoritesPage