import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import Navbar from "../../Components/Navbar/Navbar"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './FavoritesPage.css';

const FavoritesPage = () => {
    
    const Favorites = useSelector(state => state.Favorites.data);
    const [renderedImages, setRenderedImages] = useState(Favorites);
    let ImagesFilteredByName = [];

    const filterByNameHandler = (event) => {
        ImagesFilteredByName = Favorites.filter(image => image.description.includes(event.target.value));
        setRenderedImages(ImagesFilteredByName);
    }

    // const filterByPropertyHandler = (event) => {
    //     console.log(renderedImages);
    //     setRenderedImages(renderedImages.sort((a, b) => a.width - b.width));
    // } 

    const filterByPropertyHandler = (event, value) => {
        const sortedImages = [...renderedImages]; 
        setRenderedImages(sortedImages.sort((a, b) => a[value] - b[value]))
      };
      
    return (
        <>
        <div className='favorites__header'>
        <Navbar className={"navbar navbar--favorites"}/>
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
        <Footer className="footer"/>
        </>
    )
}

export default FavoritesPage