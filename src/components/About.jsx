import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="about-text">
                        I'm <span className="highlight">Nithin</span>, a 22-year-old Product Growth specialist and Engineer from Bangalore.
                    </p>
                    <p className="about-description">
                        I bridge the gap between technical engineering and product growth.
                        Graduated from <span className="highlight">PES University</span> in 2025 (B.Tech ECE).
                        My passion lies in building impactful products and scaling them from 0 to 1 and beyond.
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
            </div>
        </section>
    );
};

export default About;
