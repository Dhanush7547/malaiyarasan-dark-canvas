import { Smartphone, FileImage, Layers, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "App UI Cloning",
      description: "Perfect recreations of popular applications with pixel-perfect accuracy. I specialize in creating functional clones that mirror the original app's behavior and design.",
      features: [
        "Instagram, Twitter, WhatsApp clones",
        "Single-account login functionality",
        "Responsive design implementation",
        "Interactive prototypes"
      ],
      color: "electric-blue"
    },
    {
      icon: <FileImage className="h-8 w-8" />,
      title: "Flyer Design & Prototyping",
      description: "Eye-catching flyers and marketing materials that communicate your message effectively. From concept to final design, I create visuals that stand out.",
      features: [
        "Event flyers and posters",
        "Business promotional materials",
        "Social media graphics",
        "Print-ready designs"
      ],
      color: "neon-green"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "No-Code App Prototyping",
      description: "Functional app prototypes without writing a single line of code. Perfect for testing ideas, getting user feedback, and presenting concepts to stakeholders.",
      features: [
        "Interactive Figma prototypes",
        "User flow demonstrations",
        "Clickable wireframes",
        "Design system creation"
      ],
      color: "soft-orange"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "UI/UX Consultation",
      description: "Expert advice on user experience and interface design. I help optimize your digital products for better user engagement and conversion rates.",
      features: [
        "User experience audits",
        "Design system consultation",
        "Usability testing guidance",
        "Interface optimization"
      ],
      color: "electric-blue"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design solutions from concept to completion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glow-border hover-lift group transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-background group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="glow-border max-w-4xl mx-auto">
            <CardContent className="pt-8 space-y-6">
              <h3 className="text-3xl font-bold gradient-text">Ready to Start Your Project?</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Let's work together to bring your ideas to life. Whether you need an app clone, 
                a stunning flyer, or a complete UI/UX solution, I'm here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover-lift"
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover-lift"
                >
                  View Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;