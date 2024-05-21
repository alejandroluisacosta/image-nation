import { Link } from "react-router-dom";

const SearchPage = () => {
    return (
        <>
        <header className="header">
        <Link to="favorites"><button>Favorites</button></Link>
        <p>High-quality images</p>
        <p>for high-quality projects</p>
        </header>
        </>
    )
}

export default SearchPage;