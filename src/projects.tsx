import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import imageSocialMedia from './assets/social-media.jpg';
import imageHealthBite from './assets/healthbite_teaser_image.png';

import React from 'react';
import AnimatedMenu from './animated-menu';

// Define the type for a single project
type Project = {
    title: string;
    image: string;
    tools: string[];
    description: string;
    link: string;
};

const projects: { analysis: Project[]; science: Project[] } = {
    analysis: [
        {
            title: 'Social Media and Emotional Wellbeing',
            image: imageSocialMedia,
            tools: ['Tableau', 'Python - Pandas', 'CSS', 'HTML'],
            description:
                "Completed as part of a Data Visualization course, this team project explores the relationship between social media usage and emotional well-being. Using interactive charts, we examined how factors like age, platform preferences, time spent, and types of interaction (likes, comments, messages, posts) influence users' dominant emotions. Clicking into the project, you'll see visual breakdowns of emotional trends across platforms, demographic insights, and how specific behaviors relate to emotional responses.",
            link: 'https://groups.ischool.berkeley.edu/datasci209summer2024section003/209Project-template-html/',
        },
    ],
    science: [
        {
            title: 'HealthBite',
            image: imageHealthBite,
            tools: ['Python', 'RAG Agent', 'LangChain', 'AWS', 'GPT-3'],
            description:
                'HealthBite is an AI-powered meal planning chatbot designed to support individuals with chronic conditions like Type 2 diabetes, hypertension, and heart disease. Built as part of my capstone project, the goal was to make dietary guidance more accessible by turning complex nutrition guidelines into personalized, actionable meal plans. My role focused on sourcing, cleaning, and preparing the dietary and recipe data that powered the recommendation system. The final product was a fully deployed MVP that used a RAG pipeline and LLM agents to deliver tailored meal suggestions.',
            link: 'https://www.ischool.berkeley.edu/projects/2024/healthbite',
        },
    ],
};

function Projects() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'analysis' | 'science'>('analysis');

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <main className="projects-container">
            <AnimatedMenu />
            <h1 className="projects-header">My Projects</h1>

            <div className="project-tabs">
                <button
                    className={`tab-button ${activeTab === 'analysis' ? 'active' : ''}`}
                    onClick={() => setActiveTab('analysis')}
                >
                    Data Analysis
                </button>

                <button
                    className={`tab-button ${activeTab === 'science' ? 'active' : ''}`}
                    onClick={() => setActiveTab('science')}
                >
                    Data Science
                </button>
            </div>

            <div className="project-cards">
                {projects[activeTab].map((project, idx) => (
                    <div key={idx} className="project-card">
                        <img src={project.image} alt={project.title} className="project-thumbnail" />
                        <div className="project-info">
                            <h3 className="project-title">{project.title}</h3>
                            <div className="tools-label">Tools:</div>
                            <div className="project-tools">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="tool-tag">{tool}</span>
                                ))}
                            </div>
                            <div
                                className="read-more-btn"
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedProject(project)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') setSelectedProject(project);
                                }}
                            >
                                <span>Read More</span> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div
                                className="close-btn"
                                onClick={() => setSelectedProject(null)}
                                aria-label="Close modal"
                            ></div>

                            <h2 className="selected-project-title">{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="btn-top-static-bottom-hover">View Project</button>
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </main>
    );
}

export default Projects;
