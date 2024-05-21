import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ImageComponent from "../../Components/ImageComponent/ImageComponent";

const SearchPage = () => {
    return (
        <>
        <header className="header">
        <Link to="favorites"><button>Favorites</button></Link>
        <p>High-quality images</p>
        <p>for high-quality projects</p>
        </header>
        <ImageComponent isSearchPage={true}/>
        <Footer/>
        </>
    )
}

export default SearchPage;