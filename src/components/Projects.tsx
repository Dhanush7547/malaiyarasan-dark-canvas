import { ExternalLink, Github, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import instagramClone from "@/assets/instagram-clone.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Instagram App Clone",
      description: "A fully functional Instagram login clone that supports single-account login per device, mimicking real app behavior. Built using Figma with interactive prototyping capabilities.",
      image: instagramClone,
      technologies: ["Figma", "UI Design", "Prototyping", "User Experience"],
      features: [
        "Single-account login functionality",
        "Pixel-perfect Instagram interface",
        "Interactive user flows",
        "Responsive design implementation",
        "Real-time preview capabilities"
      ],
      type: "App Clone",
      status: "Completed"
    },
    {
      title: "Social Media Dashboard",
      description: "A comprehensive social media management dashboard clone featuring multiple platform integrations and analytics visualization.",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "Adobe XD", "User Research", "Analytics"],
      features: [
        "Multi-platform integration",
        "Analytics dashboard",
        "Content scheduling interface",
        "User engagement metrics",
        "Dark/Light theme support"
      ],
      type: "Dashboard Design",
      status: "In Progress"
    },
    {
      title: "E-commerce Mobile App",
      description: "A modern e-commerce mobile application design with seamless shopping experience and intuitive navigation.",
      image: "/api/placeholder/600/400",
      technologies: ["Figma", "Mobile Design", "UX Research", "Prototyping"],
      features: [
        "Shopping cart functionality",
        "Product catalog design",
        "Payment gateway interface",
        "User profile management",
        "Wishlist and favorites"
      ],
      type: "Mobile App",
      status: "Concept"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my expertise in app cloning and UI/UX design through real projects
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className={`glow-border hover-lift overflow-hidden ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={`grid lg:grid-cols-2 gap-0 ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge variant={
                      project.status === 'Completed' ? 'default' : 
                      project.status === 'In Progress' ? 'secondary' : 'outline'
                    }>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        {project.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">{project.title}</CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-primary">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      variant="default"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-lift"
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button variant="outline" className="hover-lift">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="glow-border max-w-4xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <h3 className="text-3xl font-bold gradient-text">Want to See More?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These are just a few examples of my work. I'm constantly working on new projects 
                and exploring innovative design solutions. Let's discuss your next project!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-lift"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover-lift"
                >
                  View Full Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;