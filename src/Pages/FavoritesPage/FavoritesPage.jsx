import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import './FavoritesPage.css';
import FooterComponent from '../../Components/FooterComponent/FooterComponent';
import NavbarComponent from '../../Components/NavbarComponent/NavbarComponent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FavoritesPage = () => {

    
    const Favorites = useSelector(state => state.Favorites.data);
    const [renderedImages, setRenderedImages] = useState(Favorites);
    let ImagesFilteredByName = [];
    
    const notify = () => {
        toast.success("Image removed successfully", {
            position: 'top-center',
            hideProgressBar: true,
        })
    }
    
    const [imageRemoved, setImageRemoved] = useState(false);
    
    const filterByNameHandler = (event) => {
        ImagesFilteredByName = Favorites.filter(image => image.description.includes(event.target.value));
        setRenderedImages(ImagesFilteredByName);
    };

    const filterByPropertyHandler = (event, value) => {
        const sortedImages = [...renderedImages];
        if (value === 'date') {
            sortedImages.sort((a, b) => new Date(a[value]) - new Date(b[value]));
        } else {
            sortedImages.sort((a, b) => a[value] - b[value])
        }
        setRenderedImages(sortedImages);
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
        {Favorites.length ?
            <div className='image-list image-list--favorites'>
                {renderedImages.map((favoriteImage, index) => (
                    <ImageComponent 
                    isSearchPage={false} 
                    id={favoriteImage.id} 
                    authorName={favoriteImage.authorName} 
                    image={favoriteImage.image} 
                    description={favoriteImage.description} 
                    width={favoriteImage.width} 
                    height={favoriteImage.height} 
                    likes={favoriteImage.likes} 
                    date={new Date(favoriteImage.date).toLocaleDateString('en-US')} 
                    downloadLink={favoriteImage.downloadLink} 
                    key={index}
                    />
                ))}
            </div>
        :
        <div className='no-images-message-container'>
            <p className='no-images-message-container__text'>No favorite images</p>
        </div>
        }
        
        {imageRemoved ? <ToastContainer autoClose={1500}/> : <></>}
        <FooterComponent className="footer"/>
        </>
    )
}


export default FavoritesPage