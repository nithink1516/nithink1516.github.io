import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Featured Projects
                </motion.h2>

                <div className="projects-grid">
                    {[
                        {
                            title: "CardWise Choose",
                            shortDescription: "Smart credit card selection tool",
                            summary: "Help people choose the best credit card based on personalized inputs. Makes comparing rewards, fees, and benefits simple and tailored to individual spending patterns.",
                            tags: ["Finance", "AI", "Comparison"],
                            link: "https://creditcard-choose.lovable.app/"
                        },
                        {
                            title: "PolicyPal Selector",
                            shortDescription: "Insurance decision helper",
                            summary: "Simplifies choosing health, life, and vehicle insurance by guiding users through personalized questions to find policies that match their needs and budget.",
                            tags: ["Insurance", "Health", "Decision Tool"],
                            link: "https://policypal-selector.lovable.app/"
                        },
                        {
                            title: "Can You Afford It?",
                            shortDescription: "20+ financial calculators",
                            summary: "A lot of people regret making wrong financial decisions. These 20 tools help someone make better financial decisions - from home buying to retirement planning, get instant answers to your money questions.",
                            tags: ["Calculators", "Planning", "Money"],
                            link: "https://finance-tools-livid.vercel.app/"
                        }
                    ].map((project, index) => (
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="project-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-image-placeholder">
                                <div className="project-overlay">
                                    <p>{project.summary}</p>
                                </div>
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.shortDescription}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <p className="projects-note">More details coming soon...</p>
            </div>
        </section>
    );
};

export default Projects;
