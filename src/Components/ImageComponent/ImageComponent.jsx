import './ImageComponent.css';
import SearchButtonsComponent from '../SearchButtonsComponent/SearchButtonsComponent';
import FavoriteButtonsComponent from '../FavoriteButtonsComponent/FavoriteButtonsComponent';

const ImageComponent = ({ isSearchPage, id, authorName, image, downloadLink }) => {

    return (
        <article className="image-component">
            <h3 className="image-component__author">{authorName}</h3>
            <img className="image-component__image" src={image} alt="owl"/>
            {
            isSearchPage ? 
            <SearchButtonsComponent isSearchPage={false} id={id} authorName={authorName} image={image} downloadLink={downloadLink}/> 
            :
            <FavoriteButtonsComponent id={id} />
            }
        </article>
    )
}

export default ImageComponent;