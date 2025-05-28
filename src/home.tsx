//import { useEffect, useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython, faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";

import AnimatedMenu from './animated-menu';


import aboutImage from './assets/aboutImage.jpeg';
import tableauLogo from './assets/tableauLogo.png';
import { faR } from "@fortawesome/free-solid-svg-icons/faR";

//const client = generateClient<Schema>();

function App() {
  const navigate = useNavigate();


  return (
    <main>
      <AnimatedMenu />
      <h1>Hi, I'm Kimsean Pen</h1>
      <h2> Data Analyst & Data Scientist</h2>

      <div className="button-row">
        <button className="underline-button" onClick={() => navigate('/projects')}>
          Projects
        </button>
        <button className="underline-button" onClick={() => navigate('/resume')}>
          Resume
        </button>
      </div>

      <section className="about-me">
        <div className="about-me-content">
          <div className="about-me-inner">
            <div className="about-me-image">
              <img src={aboutImage} alt="Kimsean Pen" />
            </div>
            <div className="about-me-text">
              <h3>ABOUT ME</h3>
              <p>
                I’m a recent graduate and early-career data scientist passionate about using analytics, experimentation, and clear storytelling to build better products and user experiences.
              </p>
              <p>
                I thrive at the intersection of data and product strategy, where insights drive action. Whether I’m wrangling messy datasets, running experiments, or designing dashboards, I focus on helping teams move faster and make smarter decisions.
              </p>

              <p> With a foundation in statistics, data wrangling, machine learning, databases, visualization, and stakeholder communication, I’m especially drawn to questions about user behavior and impact-what’s working, what’s not, and how we can iterate with purpose.</p>


            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <h3>Skills</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <FontAwesomeIcon icon={faPython} size="4x" />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faDatabase} size="4x" />
            <p>SQL</p>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faR} size="4x" />
            <p>R-Studio</p>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faReact} size="4x" />
            <p>React</p>
          </div>
          <div className="skill-item">
            <FontAwesomeIcon icon={faGithub} size="4x" />
            <p>GitHub</p>
          </div>

          <div className="tableau-image">
            <img src={tableauLogo} alt='tableau' style={{ width: '60px', height: '60px' }} />
            <p>Tableau</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h3>Contact</h3>
        <p>Feel free to reach out via email or connect with me on LinkedIn!</p>
        <div className="contact-buttons">
          <a href="mailto:kimseanpen@berkeley.edu" target="_blank" rel="noopener noreferrer">
            <button className="btn-wobble">Email Me</button>
          </a>
          <a href="https://www.linkedin.com/in/kimsean-pen" target="_blank" rel="noopener noreferrer">
            <button className="btn-wobble">LinkedIn</button>
          </a>

        </div>
      </section>

    </main>
  );
}

export default App;
