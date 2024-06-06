import { Link } from "react-router-dom";
import './NavbarComponent.css';
import logoWhite from '/dist/assets/ImageNationLogoWhite.png';
import logoBlack from '/dist/assets/ImageNationLogoBlack.png';

const NavbarComponent = ({ className }) => {
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
            <Link to="/"><button className="navbar__button navbar__button--favorites">Home</button></Link>
            </>
            }
        </nav>
    )
}

export default NavbarComponent;