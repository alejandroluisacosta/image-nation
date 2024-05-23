import './ImageComponent.css';
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import { useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Features/Favorites/FavoritesSlice';
import { useDispatch } from 'react-redux';

const ImageComponent = ({ isSearchPage, id, authorName, image, downloadLink }) => {

    const Favorites = useSelector(state => state.Favorites.data);
    const dispatch = useDispatch();

    const addFavoriteHandler = (event) => {
        event.preventDefault();
        dispatch(addFavorite({isSearchPage: false, id: event.target.id, authorName: event.target.authorName, image: event.target.image, downloadLink: event.target.downloadLink}));
        console.log(Favorites);
    }

    const favoriteButtons = <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
    <IconButton>
        <span className="image-component__buttons__favorite material-symbols-outlined">
            favorite
        </span>
    </IconButton>
    <IconButton>
        <span className="image-component__buttons__download material-symbols-outlined">
            download
        </span>
    </IconButton>
    <IconButton>
        <span className="image-component__buttons__edit material-symbols-outlined">
            edit
        </span>
    </IconButton>
    </ButtonGroup>

    const searchButtons = <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
    <IconButton onClick={addFavoriteHandler}>
        <span className="image-component__buttons__favorite material-symbols-outlined">
            favorite
        </span>
    </IconButton>
    <a href={downloadLink} download='image-by'><IconButton>
        <span className="image-component__buttons__download material-symbols-outlined">
            download
        </span>
    </IconButton></a>
    </ButtonGroup>
    return (
        <article className="image-component">
            <h3 className="image-component__author">{authorName}</h3>
            <img className="image-component__image" src={image} alt="owl"/>
            {isSearchPage ? searchButtons : favoriteButtons}
        </article>
    )
}

export default ImageComponent;