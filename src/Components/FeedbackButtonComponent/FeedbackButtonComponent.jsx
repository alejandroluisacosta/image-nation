import { useState } from 'react';
import './FeedbackButtonComponent.css'

const feedbackButton = document.getElementById("feedbackButton");



const FeedbackButtonComponent = () => {
    
    const [innerText, setInnerText] = useState(<span className="material-symbols-outlined"> person_raised_hand </span>)
    
    const onMouseOverHandler = () => {
        if (window.innerWidth > 1000) {
            setInnerText('Feedback this project');
        }
    }
    
    const onMouseOutHandler = () => {
        setInnerText(<span className="material-symbols-outlined"> person_raised_hand </span>);
    }

    return (
    <button className="feedbackButton" id="feedbackButton" onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler} href="#">
        {innerText}
    </button>
    )
}

export default FeedbackButtonComponent;