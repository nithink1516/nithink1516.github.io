import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <h2 className="footer-logo">Nithin.</h2>
                    <p className="footer-text">Building things that matter.</p>

                    <div className="social-links">
                        <a href="mailto:knithin1516@gmail.com" className="social-icon">
                            <Mail size={24} />
                        </a>
                        <a href="https://linkedin.com/in/nithin-chowdary" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="social-icon">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Nithin Chowdary. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
