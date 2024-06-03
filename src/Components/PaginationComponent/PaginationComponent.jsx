import IconButton from '@mui/joy/IconButton';

const PaginationComponent = () => {
    return (
        <div className="pagination-container">
        <IconButton>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_left
            </span>
        </IconButton>
        <IconButton>
            <span className="pagintaion-container__button material-symbols-outlined">
                chevron_right
            </span>
        </IconButton>
        </div>
    )
}

export default PaginationComponent;