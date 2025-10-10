import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import nxtStroreImg from "@/assets/projects/nxtStore.png";
import controlXImg from "@/assets/projects/controlx.png";
import podcastrImg from "@/assets/projects/podcastr.png";
import clarityhubImg from "@/assets/projects/clarityhub.png";
import adiImg from "@/assets/projects/Adi.png";
import portfolioImg from "@/assets/projects/portfolio.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "NxtStore",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription:
        "A comprehensive e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart, and secure payment processing with Stripe integration.",
      tags: ["Next.js", "Node.js", "MongoDB", "Express", "Stripe"],
      code: "https://github.com/3laa-812/e-commerce",
      demo: "https://e-commerce-beryl-alpha.vercel.app",
      image: nxtStroreImg,
    },
    {
      title: "ControlX",
      description:
        " Production-ready CRM dashboard with comprehensive business management capabilities and real-time updates",
      longDescription:
        "A real-time task management application enabling teams to collaborate effectively with features like drag-and-drop boards, real-time notifications, and progress tracking.",
      tags: ["React", "Kanban Board", "GraphQL", "Refine"],
      code: "https://github.com/3laa-812/controlX",
      demo: "https://control-x-sigma.vercel.app",
      image: controlXImg,
    },
    {
      title: "Podcastr",
      description: "AI SaaS Podcast Platform",
      longDescription:
        "a cutting-edge AI-powered SaaS application that empowers users to create, discover, and enjoy podcasts with the help of artificial intelligence. From converting text to audio using multi-voice AI to generating custom podcast thumbnails and offering seamless playback, this platform is designed to deliver a modern and immersive podcasting experience.",
      tags: ["Next.js", "convex", "ShadCN", "CAMP Ai", "Pollinations API"],
      code: "https://github.com/3laa-812/podcastr",
      demo: "https://podcastr-eta-one.vercel.app",
      image: podcastrImg,
    },
    {
      title: "ClarityHub",
      description: "ClarityHub is a sleek developer-focused search companion ",
      longDescription:
        " is a sleek developer-focused search companion that brings together the most relevant content — from YouTube videos, GitHub repositories, and Tech articles — in one beautiful, reactive interface",
      tags: ["React", "motion", "API Integration", "Zustand"],
      code: "https://github.com/3laa-812/clarityhub",
      demo: "https://clarityhub-opal.vercel.app",
      image: clarityhubImg,
    },
    {
      title: "Adi",
      description: "Smart Toll Collection System",
      longDescription:
        "A modern, bilingual (Arabic RTL + English) Smart Toll Collection System frontend built with React, TypeScript, and TailwindCSS. This system manages automated toll gate payments using BLE technology, real-time balance tracking, and seamless user experience..",
      tags: ["React", "API Integration", "Tailwind CSS"],
      code: "https://github.com/3laa-812/adii",
      demo: "https://adii-eg.vercel.app",
      image: adiImg,
    },
    {
      title: "Portfolio",
      description:
        "A modern, responsive web application built with clean UI and scalable architecture, focusing on performance, accessibility, and real-world functionality",
      longDescription:
        "This project demonstrates my ability to design and build professional front-end applications from concept to deployment. I translated the Figma design into a pixel-perfect interface using HTML, CSS, and JavaScript (or React/Next.js), ensuring responsiveness across all devices. The app includes dynamic interactions, clean component structure, and efficient data management, following best practices in performance and accessibility. It reflects my attention to detail, problem-solving mindset, and commitment to delivering smooth, user-friendly experiences",
      tags: ["React", "Node.js", "MongoDB", "AWS S3"],
      code: "https://github.com/3laa-812/myPortfolio",
      demo: "https://3laar.netlify.app",
      image: portfolioImg,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={() => setSelectedProject(index)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost" className="gap-2">
                      <Github className="h-4 w-4" />
                      <a target="_blank" href={project.code}>
                        Code
                      </a>
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      <a target="_blank" href={project.demo}>
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog
        open={selectedProject !== null}
        onOpenChange={() => setSelectedProject(null)}
      >
        <DialogContent className="max-w-2xl">
          {selectedProject !== null && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">
                  {projects[selectedProject].title}
                </DialogTitle>
                <DialogDescription className="text-base pt-4">
                  {projects[selectedProject].longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1 gap-2">
                    <Github className="h-4 w-4" />
                    <a target="_blank" href={projects[selectedProject].code}>
                      View Code
                    </a>
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <ExternalLink className="h-4 w-4" />
                    <a target="_blank" href={projects[selectedProject].demo}>
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
