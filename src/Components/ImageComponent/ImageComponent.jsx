import './ImageComponent.css';
import * as React from 'react';
import Button from '@mui/joy/Button';
import ButtonGroup from '@mui/joy/ButtonGroup';
import IconButton from '@mui/joy/IconButton';

const ImageComponent = (props) => {

    const favoriteButtons = <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
    <IconButton>
        <span className="image-component__buttons__favorite material-symbols-outlined">
            favorite
        </span>
    </IconButton>
    <IconButton>
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

    const searchButtons = <ButtonGroup className="image-component__buttons" aria-label="outlined primary button group">
    <IconButton>
        <span className="image-component__buttons__favorite material-symbols-outlined">
            favorite
        </span>
    </IconButton>
    <IconButton>
        <span className="image-component__buttons__download material-symbols-outlined">
            download
        </span>
    </IconButton>
    </ButtonGroup>
    return (
        <article className="image-component">
            <h3 className="image-component__author">Author Name</h3>
            <img className="image-component__image" src='src/assets/owl.jpeg' alt="owl"/>
            {props.isSearchPage ? searchButtons : favoriteButtons}
        </article>
    )
}

export default ImageComponent;