import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';
const Header = () => {
    return (
        <div>
            <h1>Welcome to Tshirt Mania !!!</h1>
            <nav className='header-container'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>OrderReview</CustomLink>
                <CustomLink to='/grandpa'>Grandpa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;