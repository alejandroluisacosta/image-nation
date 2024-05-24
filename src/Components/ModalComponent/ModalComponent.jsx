import { useState } from 'react'
import './ModalComponent.css'
import { useDispatch } from 'react-redux';
import { modifyDescription } from '../../Features/Favorites/FavoritesSlice';

const ModalComponent = ({ className, setModalClassName, id, description, width, height, likes, date}) => {
    
    const dispatch = useDispatch();
    // CUANDO PONGO ESTE ESTADO COMO CLASE AL MODAL, NO SE RE-RENDERIZA, POR LO TANTO NUNCA SE ABRE
    const [modifyDescriptionClassName, setModifyDescriptionClassName] = useState('pop-up-modal__modify-description');
    const [imageDescription,  setImageDescription] = useState(description);

    const closeModalHandler = () => {
        console.log('here');
        setModalClassName('pop-up-modal');
    }

    const openModifyDescriptionTextField = () => {
        setModifyDescriptionClassName('pop-up-modal__modify-description pop-up-modal__modify-description--open');
    }

    const modifyDescriptionHandler = (event) => {
        event.preventDefault();
        const newDescription = event.target.elements[0].value;
        dispatch(modifyDescription({id: id, description: newDescription}));
        setImageDescription(newDescription);
    }
    
    console.log(className);
    return (
        <>
        <div className={className} id="pop-up-modal">
            <p className="pop-up-modal__title"><strong>Information</strong></p>
            <span onClick={closeModalHandler} className="pop-up-modal__close material-symbols-outlined" id="pop-up-modal__close">
                close
            </span>
            <p className="pop-up-modal__description-title">Description:</p>
            <p className="pop-up-modal__description">"{imageDescription}"</p>
            <div className="pop-up-modal__button-container">
                <button onClick={openModifyDescriptionTextField} className="pop-up-modal__button-container__button" type="submit">Modify description</button>
            </div>
            <p className="pop-up-modal__property">Width: {width}</p>
            <p className="pop-up-modal__property">Height: {height}</p>
            <p className="pop-up-modal__property">Likes: {likes}</p>
            <p className="pop-up-modal__property">Addition date: {date}</p>
            <form onSubmit={modifyDescriptionHandler} className={modifyDescriptionClassName}>
                <p>New description:</p>
                <input type="text"/>
                <button>Submit</button>
            </form>
        </div>
    </>
    )
}

export default ModalComponent;