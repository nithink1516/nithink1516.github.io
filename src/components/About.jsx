import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import nithinImg from '../assets/nithin-updated-v2.jpg';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">About Me</h2>
                        <p className="about-text">
                            Curiosity shapes how I see the world, and startups are where that curiosity comes alive.
                        </p>
                        <p className="about-description">
                            Drawn to small teams, fast execution, and 0→1 problems. I care about doing meaningful work, moving quickly, and getting better every day. I chase steep learning curves, real ownership, and work that compounds.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-value">22</span>
                                <span className="stat-label">Years Old</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-value">BLR</span>
                                <span className="stat-label">Based in</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-image-wrapper"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="image-container">
                            <img src={nithinImg} alt="Nithin" className="about-image" />
                            <div className="image-backdrop"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
