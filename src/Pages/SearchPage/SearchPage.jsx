import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const SearchPage = () => {
    return (
        <>
        <header className="header">
        <Link to="favorites"><button>Favorites</button></Link>
        <p>High-quality images</p>
        <p>for high-quality projects</p>
        </header>
        <Footer/>
        </>
    )
}

export default SearchPage;