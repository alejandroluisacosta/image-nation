import './ModalComponent.css'

const ModalComponent = ({ className, description, width, height, likes, date}) => {
    
    const modifyDescriptionHandler = (event) => {

    }
    

    return (
        <>
            <div className={className} id="pop-up-modal">
            <p className="pop-up-modal__title"><strong>Information</strong></p>
            <span className="pop-up-modal__close material-symbols-outlined" id="pop-up-modal__close">
                close
            </span>
            <p className="pop-up-modal__description-title">Description:</p>
            <p className="pop-up-modal__description">"{description}"</p>
            <div className="pop-up-modal__button-container">
                <button className="pop-up-modal__button-container__button" type="submit">Modify description</button>
            </div>
            <p className="pop-up-modal__property">Width: {width}</p>
            <p className="pop-up-modal__property">Height: {height}</p>
            <p className="pop-up-modal__property">Likes: {likes}</p>
            <p className="pop-up-modal__property">Addition date: {date}</p>
            <div className="pop-up-modal__policies">
            </div>
        </div>
    </>
    )
}

export default ModalComponent;