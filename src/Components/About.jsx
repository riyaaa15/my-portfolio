import { motion } from "framer-motion";
import "./About.css";

export default function About() {
    return (
        <section className="about" id="about">
            <div className="about-content">
                <motion.div 
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>About <span>Me</span></h2>
                    <p>Hi! I'm Riya, a passionate Frontend Developer based in India. I love turning ideas into beautiful, interactive web experiences.</p>
                    <p>I'm currently pursuing my degree while building real-world projects with React, JavaScript, and modern CSS.</p>
                    <p>When I'm not coding, you'll find me exploring new design trends and improving my skills every day.</p>
                </motion.div>

                <motion.div 
                    className="about-stats"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="stat-card">
                        <h3>5+</h3>
                        <p>Projects Built</p>
                    </div>
                    <div className="stat-card">
                        <h3>3+</h3>
                        <p>Technologies</p>
                    </div>
                    <div className="stat-card">
                        <h3>1+</h3>
                        <p>Years Learning</p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}