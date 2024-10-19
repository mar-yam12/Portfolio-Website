"use client"
import Navbar from "../components/Navbar";
import { useState } from "react";
import Image from "next/image";

const projects = [
    {
        title: "Static Interactive Resume ",
        description: "A Static Resume build with HTML, CSS and Typescript",
        image: "/1.jpg",
        tags: ["Typescript", "Javascript", "HTML", "CSS"]
    },
    {
        title: "Student ID Card",
        description: "A responsive studend ID Card",
        image: "/4.jpg",
        tags: ["Next.js", "React", "Tailwind CSS", "Typescript"]
    },
    {
        title: "Home Page",
        description: "A responsive Home Page",
        image: "/3.jpg",
        tags: ["Next.js", "Tailwind CSS", "React", "Vercel"]
    },
    {
        title: "Dynamic Resume Builder",
        description: "A Dynamic, Editable and Shareable Resume Builder",
        image: "/2.jpg",
        tags: ["Typescript", "Javascript", "HTML", "CSS"]
    },
    {
        title: "Countdown Timer",
        description: "A responsive CountDown Timer",
        image: "/5.jpg",
        tags: ["Next.js", "React", "Tailwind CSS", "Typescript"]
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website showcasing my work",
        image: "/6.jpg",
        tags: ["Next.js", "React", "Tailwind CSS", "Typescript"]
    },
 
];

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-cover bg-center bg-fixed text-purple-200"
        style={{ backgroundImage: "url('/bg3.jpg')" }}>
            <Navbar />
            <div className="container mx-auto px-4 py-16">
            <h1 className="text-6xl font-extrabold mb-8 animate-slide-in-left text-purple-200 hover:text-purple-950 transition-colors duration-900 animate-bounce">
                        My Projects
                    </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-purple-800 to-black overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-in-up rounded-3xl border-2 border-purple-500"
                            style={{ animationDelay: `${index * 0.1}s` }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="relative h-72 rounded-lg">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="fit"
                                    className="rounded-3xl border-2 border-purple-500"
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-purple-950 bg-opacity-50 flex items-center justify-center animate-fade-in">
                                        <p className="text-lg font-semibold text-center px-4">
                                            {project.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 animate-slide-in-bottom">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-purple-600 text-xs font-semibold px-2 py-1 rounded animate-bounce-in"
                                            style={{ animationDelay: `${tagIndex * 0.1 + 0.3}s` }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;