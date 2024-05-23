import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Input } from "@mui/joy"
import Navbar from "../../Components/Navbar/Navbar"
import ImageComponent from '../../Components/ImageComponent/ImageComponent';
import Footer from '../../Components/Footer/Footer';

const FavoritesPage = () => {
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
        <ImageComponent isSearchPage={false} authorName={"Nick Jonas"} image={null} downloadLink={null} />
        <Footer />
        </>
    )
}

export default FavoritesPage