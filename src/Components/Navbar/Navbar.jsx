import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <img src="src/assets/ImageNationLogoWhite.png" alt="Companie's Logo"/>
            <Link to="favorites"><button>Favorites</button></Link>
        </nav>
    )
}

export default Navbar;