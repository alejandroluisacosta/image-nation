import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../Features/Favorites/FavoritesSlice';

const SearchButtonsComponent = ({ isSearchPage, id, authorName, image, downloadLink }) => {

    const Favorites = useSelector(state => state.Favorites.data);
    const dispatch = useDispatch();

    const addFavoriteHandler = (event) => {
        event.preventDefault();
        dispatch(addFavorite({isSearchPage: false, id: id, authorName: authorName, image: image, downloadLink: downloadLink }));
        console.log(Favorites);
    }

    return (
        <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
        <IconButton onClick={addFavoriteHandler}>
            <span className="image-component__buttons__favorite material-symbols-outlined">
                favorite
            </span>
        </IconButton>
        <a><IconButton>
            <span className="image-component__buttons__download material-symbols-outlined">
                download
            </span>
        </IconButton></a>
        </ButtonGroup>
    )
}

export default SearchButtonsComponent;