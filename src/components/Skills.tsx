const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "PostgreSQL", level: 80 },
      ],
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "REST APIs", level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="glass-card rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.category}
                </h3>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-gradient-start to-gradient-end rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            animation: `slideIn 1s ease-out ${skillIndex * 0.1}s backwards`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-muted-foreground max-w-2xl">
                I'm constantly exploring new technologies and frameworks to stay at the
                forefront of web development. Currently diving deep into GraphQL, WebAssembly,
                and serverless architectures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
