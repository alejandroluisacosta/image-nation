import './ModalComponent.css'

const ModalComponent = ({ description, width, height, likes, date}) => {
    console.log(date)
    return (
        <>
            <div class="pop-up-modal" id="pop-up-modal">
            <p class="pop-up-modal__title"><strong>Information</strong></p>
            <span class="pop-up-modal__close material-symbols-outlined" id="pop-up-modal__close">
                close
            </span>
            <p class="pop-up-modal__description-title">Description:</p>
            <p class="pop-up-modal__description">{description}</p>
            <div class="pop-up-modal__button-container">
                <button class="pop-up-modal__button-container__button" type="submit">Modify description</button>
            </div>
            <p class="pop-up-modal__property">Width: {width}</p>
            <p class="pop-up-modal__property">Height: {height}</p>
            <p class="pop-up-modal__property">Likes: {likes}</p>
            <p class="pop-up-modal__property">Addition date: {date}</p>
            <div class="pop-up-modal__policies">
            </div>
        </div>
    </>
    )
}

export default ModalComponent;