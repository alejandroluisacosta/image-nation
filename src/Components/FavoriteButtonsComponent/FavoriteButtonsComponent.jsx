import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../../Features/Favorites/FavoritesSlice";
import { ButtonGroup, IconButton } from "@mui/joy";
import { saveAs } from 'file-saver';
import './FavoriteButtonsComponent.css'
import ModalComponent from "../ModalComponent/ModalComponent";
import { useState } from "react";


const FavoriteButtonsComponent = ({ id, description, width, height, likes, date, downloadLink }) => {

    const Favorites = useSelector(state => state.Favorites.data);
    const dispatch = useDispatch();
    const [modalClassName, setModalClassName] = useState("pop-up-modal")

    const popUpModalHandler = (event) => {
        setModalClassName('pop-up-modal pop-up-modal--open');
        console.log('hi');
    }

    const removeFavoriteHandler = (event) => {
        event.preventDefault();
        dispatch(removeFavorite({id: id}));
    }

    return (
    <ButtonGroup sx={{ zIndex: 0}} className="image-component__buttons" aria-label="outlined primary button group">
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
        <IconButton onClick={popUpModalHandler}>
            <span className="image-component__buttons__edit material-symbols-outlined">
                edit
            </span>
        </IconButton>
        <ModalComponent className={modalClassName} id={id} description={description} width={width} height={height} likes={likes} date={date}/>
        </ButtonGroup>
    )
}

export default FavoriteButtonsComponent;