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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      longDescription:
        "A comprehensive e-commerce platform built with MERN stack featuring user authentication, product management, shopping cart, and secure payment processing with Stripe integration.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates",
      longDescription:
        "A real-time task management application enabling teams to collaborate effectively with features like drag-and-drop boards, real-time notifications, and progress tracking.",
      tags: ["React", "Socket.io", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management",
      longDescription:
        "An intuitive dashboard for managing multiple social media accounts with analytics, scheduling posts, and engagement tracking powered by various social media APIs.",
      tags: ["React", "D3.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support",
      longDescription:
        "A feature-rich blogging platform with markdown editor, syntax highlighting, user comments, and SEO optimization for content creators.",
      tags: ["React", "Node.js", "MongoDB", "Redis"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with forecasts",
      longDescription:
        "A beautiful weather application providing real-time weather data, 7-day forecasts, and interactive maps using OpenWeather API.",
      tags: ["React", "API Integration", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for portfolios",
      longDescription:
        "A headless CMS specifically designed for developers and designers to manage their portfolio content with an intuitive admin panel.",
      tags: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
                  <p className="text-muted-foreground mb-4">{project.description}</p>

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
                      Code
                    </Button>
                    <Button size="sm" variant="ghost" className="gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
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
                    View Code
                  </Button>
                  <Button variant="outline" className="flex-1 gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
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
