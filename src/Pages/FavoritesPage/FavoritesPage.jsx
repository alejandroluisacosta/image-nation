import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import Navbar from "../../Components/Navbar/Navbar"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Footer from '../../Components/Footer/Footer';
import { useSelector } from 'react-redux';

const FavoritesPage = () => {
    
    const Favorites = useSelector(state => state.Favorites.data);
    return (
        <>
        <Navbar className={"navbar navbar--favorites"}/>
        <h2>Favorites</h2>
        <Input />
        <p>Sort by</p>
        <Select defaultValue="date">
            <Option value="date">Date</Option>
            <Option value="width">Width</Option>
            <Option value="height">Height</Option>
            <Option value="likes">Likes</Option>
        </Select>
        <>
        {Favorites.length ? Favorites.map((favoriteImage, index) => (
            <ImageComponent isSearchPage={false} id={favoriteImage.id} authorName={favoriteImage.authorName} image={favoriteImage.image} downloadLink={favoriteImage.downloadLink} key={index}/>
        ))
        :
        <p>No favorite images</p>
        }
        </>
        <Footer />
        </>
    )
}

export default FavoritesPage