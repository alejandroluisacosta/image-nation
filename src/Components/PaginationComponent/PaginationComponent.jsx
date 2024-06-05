import IconButton from '@mui/joy/IconButton';
import './PaginationComponent.css';

const PaginationComponent = ({ currentPage, nextPageHandler, previousPageHandler }) => {
    return (
        <div className="pagination-container">
        <IconButton onClick={previousPageHandler} disabled={currentPage === 1}>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_left
            </span>
        </IconButton>
        <p className='pagination-container__page'>{currentPage}</p>
        <IconButton onClick={nextPageHandler}>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_right
            </span>
        </IconButton>
        </div>
    )
}

export default PaginationComponent;