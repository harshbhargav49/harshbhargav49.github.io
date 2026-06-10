import "./style.css";

function App() {
    return (
        <>
            {/* Navbar */}
            <header className="header">
                <nav className="navbar">

                    <div className="logo">
                        Harsh<span>.</span>
                    </div>

                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button id="theme-toggle">
                        🌙
                    </button>

                </nav>
            </header>

            {/* Hero */}

            <section id="home" className="hero">

                <div className="hero-content">

                    <span className="hero-tag">
                        FRONTEND DEVELOPER
                    </span>

                    <h1>
                        Harsh <br />
                        Bhargav
                    </h1>

                    <p>
                        Building responsive, modern and user-friendly
                        web applications using React, JavaScript and CSS.
                    </p>

                    <div className="hero-info">

                        <span>🎓 MCA Pursuing</span>
                        <span>🎓 BCA Graduate</span>
                        <span>📍 Mumbai, India</span>
                        <span>💻 Frontend Developer</span>

                    </div>

                    <div className="hero-buttons">

                        <a href="#projects" className="btn">
                            View Projects
                        </a>

                        <a href="/resume.pdf" className="btn outline">
                            Download Resume
                        </a>

                    </div>

                </div>

                <div className="hero-image">

                    <div className="avatar">
                        HB
                    </div>

                </div>

            </section>

            {/* About */}

            <section id="about" className="about">

                <h2>About Me</h2>

                <p>
                    Hi, I'm Harsh, a passionate Frontend Developer
                    who enjoys transforming ideas into interactive
                    and engaging digital experiences.

                    I completed my BCA from Tilak Maharashtra
                    Vidyapeeth, Pune and am currently pursuing MCA
                    from the University of Mumbai.
                </p>

                <div className="stats">

                    <div className="stat-card">
                        <h3>5+</h3>
                        <p>Projects Built</p>
                    </div>

                    <div className="stat-card">
                        <h3>MCA</h3>
                        <p>Pursuing</p>
                    </div>

                    <div className="stat-card">
                        <h3>6.4</h3>
                        <p>BCA CGPA</p>
                    </div>

                    <div className="stat-card">
                        <h3>100%</h3>
                        <p>Dedication</p>
                    </div>

                </div>

            </section>

            {/* Skills */}

            <section id="skills" className="skills">

                <h2>Skills</h2>

                <div className="skill-card">

                    <h3>Frontend Technologies</h3>

                    <p>
                        🌐 HTML5 • 🎨 CSS3 • ⚡ JavaScript •
                        ⚛️ React • 🌊 Tailwind CSS • 🅱️ Bootstrap
                    </p>

                </div>

                <div className="skill-card">

                    <h3>Tools</h3>

                    <p>
                        🐙 Git • 📂 GitHub • 💻 VS Code •
                        ▲ Vercel • 🚀 Netlify
                    </p>

                </div>

                <div className="skill-card">

                    <h3>Currently Learning</h3>

                    <p>
                        🟢 Node.js • 🚂 Express.js •
                        🍃 MongoDB • 🔗 REST APIs
                    </p>

                </div>

            </section>

            {/* Education */}

            <section id="education" className="education">

                <h2>Education</h2>

                <div className="timeline">

                    <div className="timeline-item">
                        <h3>MCA (Pursuing)</h3>
                        <p>University of Mumbai</p>
                        <span>2025 - Present</span>
                    </div>

                    <div className="timeline-item">
                        <h3>BCA</h3>
                        <p>Tilak Maharashtra Vidyapeeth, Pune</p>
                        <span>CGPA: 6.4 / 10</span>
                    </div>

                    <div className="timeline-item">
                        <h3>HSC</h3>
                        <p>Maharashtra State Board</p>
                        <span>63.3%</span>
                    </div>

                </div>

            </section>

            {/* Projects */}

            <section id="projects" className="projects">

                <h2>Projects</h2>

                <div className="project-grid">

                    <div className="project-card">
                        <h3>Productivity App</h3>
                        <p>
                            Task management application with
                            reminders and priorities.
                        </p>

                        <div className="project-buttons">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3>Currency Converter</h3>
                        <p>
                            Real-time currency conversion using APIs.
                        </p>

                        <div className="project-buttons">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3>Calculator</h3>
                        <p>
                            Modern responsive calculator application.
                        </p>

                        <div className="project-buttons">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>

                    <div className="project-card">
                        <h3>Weather App</h3>
                        <p>
                            Weather forecast app using API integration.
                        </p>

                        <div className="project-buttons">
                            <a href="#">Live Demo</a>
                            <a href="#">GitHub</a>
                        </div>
                    </div>

                </div>

            </section>

            {/* Certificates */}

            <section className="certificates">

                <h2>Certificates</h2>

                <div className="project-grid">

                    <div className="project-card">
                        JavaScript Certificate
                    </div>

                    <div className="project-card">
                        React Certificate
                    </div>

                    <div className="project-card">
                        Git & GitHub Certificate
                    </div>

                    <div className="project-card">
                        Frontend Development Certificate
                    </div>

                </div>

            </section>

            {/* Contact */}

            <section id="contact" className="contact">

                <h2>Let's Work Together</h2>

                <form>

                    <input
                        type="text"
                        placeholder="Your Name"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                    />

                    <textarea
                        placeholder="Message"
                    ></textarea>

                    <button type="submit">
                        Send Message
                    </button>

                </form>

            </section>

            {/* Footer */}

            <footer>

                <p>
                    © 2026 Harsh Bhargav
                </p>

                <p>
                    Built with React & ❤️
                </p>

            </footer>
        </>
    );
}

export default App;