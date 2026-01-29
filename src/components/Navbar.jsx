import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import './Navbar.css';
const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        console.log("DEBUG: Navbar Mounted - V1"); // Debugging
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled glass-strong' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <Magnetic className="logo-container">
                    <a href="#" className="logo">Nithin. <span style={{ fontSize: '0.8rem', color: 'red' }}>DEBUG: V1</span></a>
                </Magnetic>

                <ul className="nav-links">
                    <li><Magnetic><a href="#about">About</a></Magnetic></li>
                    <li><Magnetic><a href="#experience">Experience</a></Magnetic></li>
                    <li><Magnetic><a href="#projects">Projects</a></Magnetic></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
