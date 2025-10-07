import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    heroElement?.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      heroElement?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        
        {/* Interactive Gradient Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 transition-all duration-500 ease-out"
          style={{
            background: `radial-gradient(circle, hsl(var(--gradient-start)), transparent)`,
            left: `${mousePosition.x * 100}%`,
            top: `${mousePosition.y * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700 ease-out"
          style={{
            background: `radial-gradient(circle, hsl(var(--gradient-end)), transparent)`,
            left: `${(1 - mousePosition.x) * 100}%`,
            top: `${(1 - mousePosition.y) * 100}%`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <p className="text-muted-foreground mb-4 text-lg">Hello, I'm</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-2 gradient-text">
              Alex Thompson
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="animated-gradient-text">Full Stack Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Specializing in MERN Stack • Building scalable web applications
              with modern technologies and elegant design
            </p>
          </div>

          <div className="animate-fade-in-up flex flex-wrap gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group bg-gradient-to-r from-gradient-start to-gradient-end hover:opacity-90 transition-all"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="gradient-border"
            >
              Get In Touch
            </Button>
          </div>

          <div className="animate-fade-in flex gap-6 justify-center">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:contact@example.com"
              className="p-3 rounded-full glass-card hover:scale-110 transition-transform"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-gradient-to-b from-gradient-start to-gradient-end" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
