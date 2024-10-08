import './ImageComponent.css';
import SearchButtonsComponent from '../SearchButtonsComponent/SearchButtonsComponent';
import FavoriteButtonsComponent from '../FavoriteButtonsComponent/FavoriteButtonsComponent';

const ImageComponent = ({ isSearchPage, id, authorName, image, downloadLink, width, height, likes, date, description, setImageAdded}) => {
    console.log()
    return (
        <article className="image-component">
            <h3 className="image-component__author">{authorName}</h3>
            <div className='image-component__image-container'>
                <div className="image-component__image" style={{backgroundImage: `url(${image})`}}></div>
            </div>
            {
            isSearchPage ? 
            <SearchButtonsComponent isSearchPage={false} id={id} authorName={authorName} image={image} description={description} width={width} height={height} likes={likes} date={date} downloadLink={downloadLink} setImageAdded={setImageAdded}/> 
            :
            <FavoriteButtonsComponent id={id} downloadLink={downloadLink} width={width} height={height} likes={likes} date={date} description={description}/>
            }
        </article>
    )
}

export default ImageComponent;