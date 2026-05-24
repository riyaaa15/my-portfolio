import './NavBar.css'
import { Link } from 'react-scroll'

export default function NavBar() {
    return (
        <nav>
            <ul>
                <li><Link to="hero" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contacts</Link></li>
            </ul>
        </nav>
    )
}