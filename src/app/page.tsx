'use client'

import React from 'react'
import Link from 'next/link'
import ProjectCard from './components/ProjectCard'

export default function Home() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product management, shopping cart, and secure checkout.",
      imageUrl: "/project1.jpg",
      technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
      projectUrl: "https://ecommerce-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop interface, and team collaboration features.",
      imageUrl: "/project2.jpg",
      technologies: ["React", "Node.js", "Socket.IO", "PostgreSQL"],
      projectUrl: "https://taskmanager-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/task-manager"
    },
    {
      title: "AI Image Generator",
      description: "An AI-powered image generation tool that creates unique artwork based on text descriptions using OpenAI's DALL-E API.",
      imageUrl: "/project3.jpg",
      technologies: ["React", "OpenAI API", "TailwindCSS", "Express"],
      projectUrl: "https://ai-image-gen.vercel.app",
      githubUrl: "https://github.com/johndoe/ai-image-generator"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          Hi, I'm John Doe
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Full Stack Developer | Web Designer | Tech Innovator
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="#projects" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link 
            href="#contact" 
            className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
          >
            Contact Me
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            I'm a passionate full-stack developer with expertise in modern web technologies. 
            With a strong foundation in both front-end and back-end development, I create 
            seamless, user-friendly applications that solve real-world problems.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I specialize in React, Next.js, Node.js, and cloud technologies. When I'm not coding, 
            you can find me contributing to open-source projects or learning new technologies 
            to stay ahead in this ever-evolving field.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-8">
            Interested in working together? Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:john.doe@example.com"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johndoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 
