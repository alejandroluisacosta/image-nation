import IconButton from '@mui/joy/IconButton';
import './PaginationComponent.css';
import { current } from '@reduxjs/toolkit';

const PaginationComponent = ({ currentPage, nextPageHandler, previousPageHandler }) => {
    return (
        <div className="pagination-container">
        <IconButton onClick={previousPageHandler}>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_left
            </span>
        </IconButton>
        <p>{currentPage}</p>
        <IconButton onClick={nextPageHandler}>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_right
            </span>
        </IconButton>
        </div>
    )
}

export default PaginationComponent;