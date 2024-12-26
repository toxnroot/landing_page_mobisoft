"use client";
import { useState } from 'react';
const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="NavBar">
            <div className="logo">
                <img src="/logo2.png" alt="logo" />
            </div>
            <div className={`links ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li>How it works</li>
                    <li>About us</li>
                    <li>Pricing</li>
                    <li>Tools</li>
                </ul>
            </div>
            <div className="buttons">
                <span className="login">Login</span>
                <span className="create">Create Account</span>
            </div>
            <div className="toggle-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>
        </div>
    );
};

export default NavBar;

