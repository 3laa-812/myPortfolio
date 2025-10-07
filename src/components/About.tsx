import { Code2, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and efficiency",
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Creating intuitive experiences that users love",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate full-stack developer with expertise in building modern web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a full-stack developer specializing in the MERN stack with a passion for
                creating elegant solutions to complex problems. With expertise in MongoDB,
                Express.js, React, and Node.js, I build scalable applications that deliver
                exceptional user experiences.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I love staying up-to-date with the latest technologies and best practices,
                continuously learning and adapting to create better, more efficient solutions.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-muted-foreground">Experience</p>
                  <p className="font-semibold">1+ Years</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Projects Completed</p>
                  <p className="font-semibold">10+</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Specialization</p>
                  <p className="font-semibold">MERN Stack</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-card rounded-2xl p-8 hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gradient-start to-gradient-end flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
