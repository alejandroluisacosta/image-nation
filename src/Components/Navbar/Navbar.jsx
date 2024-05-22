import { Link } from "react-router-dom";
import './Navbar.css';
const Navbar = ({ className }) => {
    return (
        <nav className={className}>
            <img src="src/assets/ImageNationLogoWhite.png" alt="Companie's Logo"/>
            <Link to="favorites"><button className="navbar__button">Favorites</button></Link>
        </nav>
    )
}

export default Navbar;