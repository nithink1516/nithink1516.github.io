import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        company: "Swiggy",
        role: "Product Growth",
        period: "April '25 - Present",
        description: [
            "Drove the pilot launch of the Fruits & Vegetables (F&V) vertical, managing end-to-end operations.",
            "Owned GTM and rollout of Driver App & Reconciliation App across all warehouses, driving 100% adoption.",
            "Conducted 50+ interviews with delivery partners and operators to uncover pain points.",
            "Reworked the payment-screen user flow in the Recon App, reducing monthly financial leakages.",
            "Contributed to GTM launch for private-label staples (rice, dals, grains)."
        ]
    },
    {
        company: "Product Space",
        role: "Founder's Office",
        period: "July '24 - Dec '24",
        description: [
            "Conducted 30+ one-on-one student interviews to improve product features.",
            "Managed cohort operations end-to-end, coordinating cross-functional delivery.",
            "Contributed to the scaling of new business verticals, driving growth.",
            "Redesigned ToFu outreach, improving lead conversion rate by 20%."
        ]
    },
    {
        company: "Unacademy",
        role: "Content Writer & Ops",
        period: "Summer 2023",
        description: [
            "Led the 0-to-1 launch of a new YouTube educational channel, achieving 100,000+ subscribers.",
            "Achieved ~15% market share among JEE preparation YouTube channels within 2 months.",
            "Researched and analyzed the EdTech market and competitors."
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="experience-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    Experience
                </motion.h2>

                <div className="timeline">
                    <motion.div
                        className="timeline-line"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <motion.div
                                className="timeline-dot"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                            />
                            <div className="timeline-content glass-card">
                                <div className="exp-header">
                                    <h3 className="exp-role">{exp.role}</h3>
                                    <span className="exp-company">@ {exp.company}</span>
                                </div>
                                <span className="exp-period">{exp.period}</span>
                                <ul className="exp-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
