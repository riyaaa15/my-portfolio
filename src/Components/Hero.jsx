import './Hero.css';
import profileImg from '../assets/my avatar.png';
import { Link } from 'react-scroll'

export default function Hero() {
    return (
        <section className="hero" id="hero">
            <div className="hero-content">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-name">Riya</h1>
                <h2 className="hero-title">Frontend Developer</h2>
                <p className="hero-desc">I build beautiful and interactive web experiences</p>
                <div className="hero-buttons">
                    <Link to="projects" smooth={true} duration={500}>
                        <button className="btn-primary">View Projects</button>
                    </Link>

                    <Link to="contact" smooth={true} duration={500}>
                        <button className="btn-secondary">Contact Me</button>
                    </Link>
                </div>
            </div>
            <img src={profileImg} className="hero-img" alt="profile" />
        </section>
    )
}