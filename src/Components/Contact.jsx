import { motion } from 'framer-motion'
import './Contact.css'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Get In <span>Touch</span>
            </motion.h2>

            <motion.p 
                className="contact-desc"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Have a project in mind or just want to say hi? Feel free to reach out!
            </motion.p>

            <div className="contact-links">
                <a href="mailto:riyaredhu1020@gmail.com">
                    <FaEnvelope /> Email Me
                </a>
                <a href="https://github.com/riyaaa15" target="_blank">
                    <FaGithub /> GitHub
                </a>
           </div>
        </section>
    )
}