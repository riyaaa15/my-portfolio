import './Hero.css';
import profileImg from '../assets/my avatar.png';

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-name">Riya</h1>
                <h2 className="hero-title">Frontend Developer</h2>
                <p className="hero-desc">I build beautiful and interactive web experiences</p>
                <div className="hero-buttons">
                    <button className="btn-primary">View Projects</button>
                    <button className="btn-secondary">Contact Me</button>
                </div>
            </div>
            <img src={profileImg} className="hero-img" alt="profile" />
        </section>
    )
}