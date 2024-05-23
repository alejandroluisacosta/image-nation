import './ImageComponent.css';
import { useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../Features/Favorites/FavoritesSlice';
import { useDispatch } from 'react-redux';
import SearchButtonsComponent from '../SearchButtonsComponent/SearchButtonsComponent';

const ImageComponent = ({ isSearchPage, id, authorName, image, downloadLink }) => {

    // const favoriteButtons = <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
    // <IconButton>
    //     <span className="image-component__buttons__favorite material-symbols-outlined">
    //         favorite
    //     </span>
    // </IconButton>
    // <IconButton>
    //     <span className="image-component__buttons__download material-symbols-outlined">
    //         download
    //     </span>
    // </IconButton>
    // <IconButton>
    //     <span className="image-component__buttons__edit material-symbols-outlined">
    //         edit
    //     </span>
    // </IconButton>
    // </ButtonGroup>

    return (
        <article className="image-component">
            <h3 className="image-component__author">{authorName}</h3>
            <img className="image-component__image" src={image} alt="owl"/>
            {isSearchPage ? <SearchButtonsComponent isSearchPage={false} id={id} authorName={authorName} image={image} downloadLink={downloadLink}/> : null}
        </article>
    )
}

export default ImageComponent;