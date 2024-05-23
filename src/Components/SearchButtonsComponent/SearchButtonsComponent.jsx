import * as React from 'react';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../Features/Favorites/FavoritesSlice';
import { saveAs } from 'file-saver';

const SearchButtonsComponent = ({ isSearchPage, id, authorName, image, description, downloadLink }) => {

    const Favorites = useSelector(state => state.Favorites.data);
    const dispatch = useDispatch();

    const addFavoriteHandler = (event) => {
        event.preventDefault();
        dispatch(addFavorite({isSearchPage: false, id: id, authorName: authorName, image: image, description: description, downloadLink: downloadLink }));
    }

    return (
        <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
        <IconButton onClick={addFavoriteHandler}>
            <span className="image-component__buttons__favorite material-symbols-outlined">
                favorite
            </span>
        </IconButton>
        <IconButton onClick={() => saveAs(downloadLink)}>
            <span className="image-component__buttons__download material-symbols-outlined">
                download
            </span>
        </IconButton>
        </ButtonGroup>
    )
}

export default SearchButtonsComponent;