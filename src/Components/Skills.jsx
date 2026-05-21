import { motion } from 'framer-motion'
import './Skills.css'
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss } from 'react-icons/si'

const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub color="white" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
]

export default function Skills() {
    return (
        <section className="skills" id="skills">
            <motion.h2 
                initial={{ opacity: 0, y: -30, }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span>Skills</span>
            </motion.h2>

            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="skill-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <span className="skill-icon">{skill.icon}</span>
                        <p>{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}