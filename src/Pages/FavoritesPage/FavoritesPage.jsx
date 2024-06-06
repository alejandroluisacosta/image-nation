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
import PaginationComponent from '../../Components/PaginationComponent/PaginationComponent';
import FeedbackButtonComponent from '../../Components/FeedbackButtonComponent/FeedbackButtonComponent';

const FavoritesPage = () => {

    
    const Favorites = useSelector(state => state.Favorites.data);
    const FavoritesQty = useSelector(state => state.Favorites.data.length);
    const [renderedImages, setRenderedImages] = useState(Favorites);
    const [imageRemoved, setImageRemoved] = useState(false);
    let [currentPage, setCurrentPage] = useState(1);
    let ImagesFilteredByName = [];
    
    const notifyRemotion = () => {
        toast.success("Image removed successfully", {
            position: 'top-center',
            hideProgressBar: true,
        })
    }

    const notifyModification = () => {
        toast.success("Description modified successfully", {
            position: 'top-center',
            hideProgressBar: true,
        })
    }
    
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

      const nextPageHandler = () => {
        setCurrentPage(currentPage + 1);
      }

      const previousPageHandler = () => {
        setCurrentPage(currentPage - 1);
      }

      useEffect(() => {
        setRenderedImages(Favorites);
        setImageRemoved(true);
        notifyRemotion();
      }, [FavoritesQty])
    return (
        <>
        <FeedbackButtonComponent />
        <div className='favorites__header'>
        <NavbarComponent className={"navbar navbar--favorites"}/>
        <h2 className="favorites__header__title">Favorites</h2>
        <Input 
        className="favorites__header__input" 
        startDecorator={
            <span className="material-symbols-outlined">
                filter_list
            </span>
        }
        onChange={filterByNameHandler} 
        placeholder='Filter by description'/>
        <p>Sort by</p>
        <Select
            className="favorites__header__select"
            onChange={filterByPropertyHandler}
            defaultValue="date"
            >
            <Option value="date">Date</Option>
            <Option value="width">Width</Option>
            <Option value="height">Height</Option>
            <Option value="likes">Likes</Option>
        </Select>
        </div>
        {!Favorites.length ?
            <>
                <div className='no-images-message-container'>
                    <p className='no-images-message-container__text'>No favorite images</p>
                </div>
            </>
            : Favorites.length > 0 && Favorites.length <= 20?
            <>
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
            </>
            : currentPage === 1 ?
            <>
                <div className='image-list image-list--favorites'>
                    {renderedImages.slice(0, 20).map((favoriteImage, index) => (
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
            </>
            :
            <>
            <div className='image-list image-list--favorites'>
                {renderedImages.slice((currentPage - 1) * 20, currentPage * 20).map((favoriteImage, index) => (
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
            </>
        }
        <PaginationComponent 
            currentPage={currentPage}
            nextPageHandler={nextPageHandler}
            previousPageHandler={previousPageHandler}
            isFavoritesPage={true}
            favoritesQty={FavoritesQty}
        />
        {Favorites.length >= 4 || (Favorites.length > 1 && window.innerWidth < 1000) ?
        <FooterComponent className="footer"/>
        :
        <FooterComponent className="footer footer--stick-to-bottom"/>
        }
        {imageRemoved ? <ToastContainer autoClose={1500}/> : <></>}
        </>
    )
}


export default FavoritesPage