import { motion } from 'framer-motion'
import './Projects.css'
import githubImg from '../assets/github-finder.png'
import cocktailImg from '../assets/cocktail.png'
import movieImg from '../assets/cinesearch.png'
import recipeImg from '../assets/recipe.png'

const projects = [
    {
        title: "GitHub Profile Finder",
        img: githubImg,
        desc: "Search any GitHub user and view their profile details, repos and followers.",
        tech: ["React", "CSS", "GitHub API"],
        link: "https://github.com/riyaaa15/react-mini-projects/tree/main/github-profile-finder"
    },
    {
        title: "Cocktail Finder",
        img: cocktailImg,
        desc: "Search cocktails, view ingredients and instructions. Random drink feature included.",
        tech: ["React", "CSS", "CocktailDB API"],
        link: "https://github.com/riyaaa15/react-mini-projects/tree/main/cocktail-finder"
    },
    {
        title: "CineSearch",
        img: movieImg,
        desc: "Search movies and view details like year, type and poster.",
        tech: ["React", "CSS", "OMDB API"],
        link: "https://github.com/riyaaa15/react-mini-projects/tree/main/movie-search-app"
    },
    {
        title: "Recipe Finder",
        img: recipeImg,
        desc: "Find meal recipes, ingredients and instructions. Filter by category.",
        tech: ["React", "CSS", "MealDB API"],
        link: "https://github.com/riyaaa15/react-mini-projects/tree/main/recipe-finder"
    },
]


export default function Projects () {
    return (
        <section className="projects" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                My <span>Projects</span>
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card"
                        initial={{ opacity: 0, y: 30}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                    >
                        <img src={project.img} className="project-img" alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.desc}</p>
                        <div className="tech-stack">
                            {project.tech.map((t, i) => (
                                <span key={i}>{t}</span>
                            ))}
                        </div>
                         <a href={project.link} target="_blank">View on GitHub →</a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}