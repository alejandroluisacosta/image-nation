import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import Navbar from "../../Components/Navbar/Navbar"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const FavoritesPage = () => {
    
    const Favorites = useSelector(state => state.Favorites.data);
    const [renderedImages, setRenderedImages] = useState(Favorites);
    let ImagesFilteredByName = [];

    const filterByNameHandler = (event) => {
        ImagesFilteredByName = Favorites.filter(image => image.description.includes(event.target.value));
        setRenderedImages(ImagesFilteredByName);
    }

    // const filterByPropertyHandler = (event) => {
    //     setRenderedImages(images => images.sort((a, b) => a[event.target.value] - b[event.target.value]));
    // } NO FUNCIONA Y CREO QUE ES PORQUE MUTA DIRECTAMENTE EL ARRAY

    const filterByPropertyHandler = (event) => {
        setRenderedImages(images => {
          const sortedImages = [...images]; 
          sortedImages.sort((a, b) => a[event.target.value] - b[event.target.value]);
          console.log(sortedImages);
          return sortedImages;
        });
      };

    return (
        <>
        <Navbar className={"navbar navbar--favorites"}/>
        <h2>Favorites</h2>
        <Input onChange={filterByNameHandler}/>
        <p>Sort by</p>
        <Select onChange={filterByPropertyHandler} defaultValue="date">
            <Option value="date">Date</Option>
            <Option value="width">Width</Option>
            <Option value="height">Height</Option>
            <Option value="likes">Likes</Option>
        </Select>
        <>
        {Favorites.length ? renderedImages.map((favoriteImage, index) => (
            <>
            <ImageComponent isSearchPage={false} id={favoriteImage.id} authorName={favoriteImage.authorName} image={favoriteImage.image} downloadLink={favoriteImage.downloadLink} key={index}/>
            </>
        ))
        :
        <p>No favorite images</p>
        }
        </>
        <Footer />
        </>
    )
}

export default FavoritesPage