import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <div className="nav-brand">Shivani</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Shivani</h1>
          <p className="hero-subtitle">
            A passionate <span className="highlight">Front-End Developer & UX/UI Designer</span> crafting
            clean, interactive, and user-friendly web experiences using React,
            Tailwind CSS, and modern web technologies.
          </p>
          
          <button className="cta-button">See My Work →</button>
          
          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:contact@example.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <FaChevronDown className="scroll-arrow" />
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            Hello! I'm Shivani, a passionate Front-End Developer and UX/UI enthusiast based in Ontario, Canada. I enjoy
            turning creative ideas into interactive, user-friendly experiences using <span className="tech-highlight">HTML, CSS, JavaScript, React, and Tailwind CSS.</span>
          </p>
          <p>
            With a background in healthcare and tech support, I bring a unique blend of problem-solving, precision, and
            empathy into every project I work on. I love crafting clean, responsive interfaces and designing intuitive user
            journeys that resonate with functionality and aesthetics.
          </p>
          <p>
            I'm always excited to take on new challenges and opportunities to learn, grow, and contribute meaningfully as a
            developer.
          </p>
          <button className="download-button">Download Resume</button>
        </div>
      </section>

      <section className="skills-section">
        <h2 className="section-title">Skills & Tools</h2>
        <div className="skills-grid">
          <div className="skill-card html">
            <div className="skill-icon">📄</div>
            <h3>HTML5</h3>
            <p>Semantic markup and accessibility</p>
          </div>
          <div className="skill-card css">
            <div className="skill-icon">🎨</div>
            <h3>CSS3</h3>
            <p>Responsive styling & animations</p>
          </div>
          <div className="skill-card javascript">
            <div className="skill-icon">⚡</div>
            <h3>JavaScript</h3>
            <p>ES6+ development & DOM scripting</p>
          </div>
          <div className="skill-card react">
            <div className="skill-icon">⚛️</div>
            <h3>React</h3>
            <p>Component-based architecture</p>
          </div>
          <div className="skill-card tailwind">
            <div className="skill-icon">🌊</div>
            <h3>Tailwind CSS</h3>
            <p>Utility-first responsive design</p>
          </div>
          <div className="skill-card typescript">
            <div className="skill-icon">📘</div>
            <h3>TypeScript</h3>
            <p>Strong typing & safe JS code</p>
          </div>
          <div className="skill-card git">
            <div className="skill-icon">🔧</div>
            <h3>Git</h3>
            <p>Version control & collaboration</p>
          </div>
          <div className="skill-card figma">
            <div className="skill-icon">🎯</div>
            <h3>Figma</h3>
            <p>Wireframing & UI prototyping</p>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image tic-tac-toe"></div>
            <div className="project-content">
              <h3>React Tic-Tac-Toe</h3>
              <p>This project showcases your ability to implement game logic using React. The user display interface features a 3x3 grid where players alternate between X and O, implements win detection rules, tracks game history, and allows for undoing moves.</p>
              <div className="project-tags">
                <span className="tag react-tag">React</span>
                <span className="tag js-tag">JavaScript</span>
                <span className="tag css-tag">CSS</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="project-card">
            <div className="project-image todo-list"></div>
            <div className="project-content">
              <h3>To-Do List</h3>
              <p>A task management app that allows users to add, complete, and delete tasks dynamically. Clean interface, task prioritization, and responsive design make it a practical tool for managing personal productivity.</p>
              <div className="project-tags">
                <span className="tag html-tag">HTML</span>
                <span className="tag css-tag">CSS</span>
                <span className="tag js-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image ecommerce"></div>
            <div className="project-content">
              <h3>E-commerce</h3>
              <p>Full-fledged e-commerce application with features for browsing products, product filtering, shopping cart, secure checkout, and a responsive design for seamless browsing.</p>
              <div className="project-tags">
                <span className="tag react-tag">React</span>
                <span className="tag tailwind-tag">TailwindCSS</span>
                <span className="tag js-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">Have a project in mind or want to discuss opportunities? I'd love to hear from you!</p>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always excited to work on new projects and collaborate with passionate individuals and teams. Whether you have a specific project in mind or just want to explore possibilities, don't hesitate to reach out.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope />
                <span>harshhvani13108@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>📍 Location</span>
                <span>Ontario, Canada</span>
              </div>
              <div className="contact-item">
                <span>🟢 Availability</span>
                <span>Currently available for new projects and opportunities. I typically respond within 24 hours.</span>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Send Message</h3>
            <form>
              <div className="form-row">
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="your@example.com" className="form-input" />
              </div>
              <input type="text" placeholder="Subject" className="form-input full-width" />
              <textarea placeholder="Tell me about your project..." className="form-textarea" rows="6"></textarea>
              <button type="submit" className="send-button">→ Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Shivani Patel. All rights reserved.</p>
        <div className="footer-links">
          <FaLinkedin />
          <FaGithub />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;