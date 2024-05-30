import { useState } from 'react'
import './ModalComponent.css'
import { useDispatch } from 'react-redux';
import { modifyDescription } from '../../Features/Favorites/FavoritesSlice';

const ModalComponent = ({ className, setModalClassName, id, description, width, height, likes, date}) => {
    
    const dispatch = useDispatch();
    const [modifyDescriptionClassName, setModifyDescriptionClassName] = useState('pop-up-modal__modify-description');
    const [buttonClassName, setButtonClassName] = useState('pop-up-modal__button-container');
    const [imageDescription,  setImageDescription] = useState(description);


    const closeModalHandler = () => {
        setModalClassName('pop-up-modal');
    }

    const openModifyDescriptionTextField = () => {
        setModifyDescriptionClassName('pop-up-modal__modify-description pop-up-modal__modify-description--open');
        setButtonClassName('pop-up-modal__button-container--closed')
    }

    const modifyDescriptionHandler = (event) => {
        event.preventDefault();
        const newDescription = event.target.elements[0].value;
        dispatch(modifyDescription({id: id, description: newDescription}));
        setImageDescription(newDescription);
        setModifyDescriptionClassName('pop-up-modal__modify-description');
        setButtonClassName('pop-up-modal__button-container');
    }

    return (
        <>
        <div className={className} id="pop-up-modal">
            <p className="pop-up-modal__title"><strong>Information</strong></p>
            <span onClick={closeModalHandler} className="pop-up-modal__close material-symbols-outlined" id="pop-up-modal__close">
                close
            </span>
            <p className="pop-up-modal__description-title"><strong>Description:</strong></p>
            <p className="pop-up-modal__description">"{imageDescription}"</p>
            <div className={buttonClassName}>
                <button onClick={openModifyDescriptionTextField} className={"pop-up-modal__button-container__button"} type="submit">Edit</button>
            </div>
            <form onSubmit={modifyDescriptionHandler} className={modifyDescriptionClassName}>
                <p className='pop-up-modal__modify-description__title'>New description:</p>
                <textarea  className='pop-up-modal__modify-description__input'/>
                <div className='pop-up-modal__modify-description__button-container'>
                    <button className='pop-up-modal__modify-description__button-container__button'>Submit</button>
                </div>
            </form>
            <p className="pop-up-modal__property"><strong>Width:</strong> {width}</p>
            <p className="pop-up-modal__property"><strong>Height:</strong> {height}</p>
            <p className="pop-up-modal__property"><strong>Likes:</strong> {likes}</p>
            <p className="pop-up-modal__property"><strong>Addition date:</strong> {date}</p>
        </div>
    </>
    )
}

export default ModalComponent;