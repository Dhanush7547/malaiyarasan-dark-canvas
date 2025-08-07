import { Palette, Code, Cloud, Figma, Layers, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Design Skills",
      icon: <Palette className="h-6 w-6" />,
      skills: [
        { name: "UI/UX Design", level: 90, color: "electric-blue" },
        { name: "App Cloning", level: 95, color: "neon-green" },
        { name: "Flyer Design", level: 85, color: "soft-orange" },
        { name: "Prototyping", level: 88, color: "electric-blue" }
      ]
    },
    {
      title: "Design Tools",
      icon: <Figma className="h-6 w-6" />,
      skills: [
        { name: "Figma", level: 92, color: "electric-blue" },
        { name: "Adobe Illustrator", level: 80, color: "soft-orange" },
        { name: "Adobe Photoshop", level: 78, color: "neon-green" },
        { name: "Sketch", level: 70, color: "electric-blue" }
      ]
    },
    {
      title: "Technical Skills",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Java (Basics)", level: 65, color: "neon-green" },
        { name: "HTML/CSS", level: 70, color: "electric-blue" },
        { name: "Problem Solving", level: 85, color: "soft-orange" }
      ]
    },
    {
      title: "Cloud & Others",
      icon: <Cloud className="h-6 w-6" />,
      skills: [
        { name: "Cloud Computing (Basics)", level: 60, color: "electric-blue" },
        { name: "No-Code Development", level: 90, color: "neon-green" },
        { name: "User Research", level: 75, color: "soft-orange" }
      ]
    }
  ];

  const highlights = [
    {
      icon: <Layers className="h-8 w-8" />,
      title: "App Cloning Specialist",
      description: "Expert in recreating popular applications with pixel-perfect accuracy"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "No-Code Prototyping",
      description: "Creating functional prototypes without writing a single line of code"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Visual Design",
      description: "Crafting beautiful, user-centered digital experiences"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and design capabilities
          </p>
        </div>

        {/* Skill Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="glow-border hover-lift text-center">
              <CardContent className="pt-8 space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-background">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold">{highlight.title}</h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glow-border hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="text-primary">{category.icon}</div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <Card className="glow-border max-w-4xl mx-auto">
            <CardContent className="pt-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">What Makes Me Different</h3>
              <p className="text-muted-foreground leading-relaxed">
                My unique approach combines technical understanding with creative design thinking. 
                I specialize in bridging the gap between complex functionality and intuitive user 
                experiences, particularly in the realm of app cloning and no-code development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;