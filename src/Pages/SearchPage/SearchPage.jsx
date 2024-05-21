import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import ImageComponent from "../../Components/ImageComponent/ImageComponent";
import Navbar from "../../Components/Navbar/Navbar";
import './SearchPage.css';
import React from 'react';
import Input from '@mui/joy/Input';

const SearchPage = () => {
    return (
        <>
        <header className="header">
        <Navbar />
        <p>High-quality images</p>
        <p>for high-quality projects</p>
        <Input placeholder="Search" />;
        </header>
        <ImageComponent isSearchPage={true}/>
        <Footer/>
        </>
    )
}

export default SearchPage;