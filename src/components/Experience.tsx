import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Cloud Computing Intern",
      company: "ANP Softech Solutions",
      period: "June 15, 2025 - June 30, 2025",
      location: "Remote",
      description: "Explored basics of cloud platforms and deployment tools, gaining foundational knowledge in cloud infrastructure and services.",
      skills: ["Cloud Computing", "AWS Basics", "Deployment Tools", "Infrastructure"],
      status: "upcoming"
    },
    {
      title: "Java Intern",
      company: "TechForge",
      period: "July 1, 2024 - July 15, 2024",
      location: "Remote",
      description: "Gained foundational experience in Java development, working on core programming concepts and application development.",
      skills: ["Java", "Programming", "Software Development", "Problem Solving"],
      status: "completed"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building practical skills through hands-on internship experiences
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`glow-border hover-lift transition-all duration-300 ${
              exp.status === 'upcoming' ? 'ring-2 ring-neon-green/30' : ''
            }`}>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl md:text-2xl flex items-center gap-3">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant={exp.status === 'upcoming' ? 'default' : 'secondary'} className="w-fit">
                      {exp.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {exp.location}
                  </span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-primary"></div>
          <div className="flex flex-col space-y-8">
            {experiences.map((_, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-glow"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;