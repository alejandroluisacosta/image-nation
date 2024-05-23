import { Link } from "react-router-dom";
import './Navbar.css';
import logoWhite from '/Users/alejandroacosta/Desktop/image-nation/src/assets/ImageNationLogoWhite.png';
import logoBlack from '/Users/alejandroacosta/Desktop/image-nation/src/assets/ImageNationLogoBlack.png'

const Navbar = ({ className }) => {
    return (
        <nav className={className}>
            { className === 'header__navbar navbar' ?
            <>
            <img src={logoWhite} alt="Companie's Logo"/>
            <Link to="favorites"><button className="navbar__button">Favorites</button></Link>
            </>
            :
            <>
            <img src={logoBlack} alt="Companie's Logo"/>
            <Link to="/"><button className="navbar__button--favorites">Home</button></Link>
            </>
            }
        </nav>
    )
}

export default Navbar;