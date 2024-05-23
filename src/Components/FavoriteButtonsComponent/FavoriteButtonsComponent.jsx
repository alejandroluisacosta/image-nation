import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../Features/Favorites/FavoritesSlice";
import { ButtonGroup, IconButton } from "@mui/joy";
import { saveAs } from 'file-saver';


const FavoriteButtonsComponent = ({ id, downloadLink }) => {

    const Favorites = useSelector(state => state.Favorites.data);
    const dispatch = useDispatch();

    const removeFavoriteHandler = (event) => {
        event.preventDefault();
        dispatch(removeFavorite({id: id}));
        console.log(id);
    }

    return (
    <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
        <IconButton onClick={removeFavoriteHandler}>
            <span className="image-component__buttons__favorite material-symbols-outlined">
                favorite
            </span>
        </IconButton>
        <IconButton onClick={() => saveAs(downloadLink)}>
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
    )
}

export default FavoriteButtonsComponent;