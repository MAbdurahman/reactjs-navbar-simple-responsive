import React, {useState} from 'react';
import MobileNavigation from "../components/MobileNavigation";
export default function App() {

    const [isShown, setIsShown] = useState(false);
    const toggleMobileMenu = () => {
        setIsShown(!isShown);
    };

    return (
        <>
            <div className='topnav'>
                {/* Your Logo/Brand here */}
                <div className='logo'>
                    Logo<span>Brand</span>
                </div>

                {/* Desktop Menu, which only appears on large screens */}
                <div className='menu'>
                    <a href='#home' className='active-link'>
                        Home
                    </a>
                    <a href='#news'>News</a>
                    <a href='#shop'>Shop</a>
                    <a href='#contact'>Contact</a>
                    <a href='#about'>About</a>
                </div>

                {/* This button only shows up on small screens. It is used to open the mobile menu */}
                <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                    &#8801;
                </button>
            </div>

            {/* The mobile menu and the close button */}
            {isShown && <MobileNavigation />}
            {isShown && (
                <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
                    &times;
                </button>
            )}

            {/* Dummy content */}
            <div className='content'>
                <h2>Welcome to LogoBrand.com</h2>
                <p>Responsive top navigation bar with React and pure CSS</p>
            </div>
        </>
    );
};