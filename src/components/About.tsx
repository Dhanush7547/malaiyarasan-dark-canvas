import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "B.Tech Information Technology",
      institution: "K.S.R Institute for Engineering and Technology",
      period: "2023 - 2027",
      status: "Current",
    },
    {
      degree: "12th Grade",
      institution: "Vivekanandha Vidyalaya Matric HR. Sec. School",
      period: "Completed",
      status: "62%",
    },
    {
      degree: "10th Grade", 
      institution: "Vivekanandha Vidyalaya Matric HR. Sec. School",
      period: "Completed",
      status: "All Pass",
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glow-border hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">My Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  I'm a UI/UX Designer passionate about creating app clones and functional prototypes 
                  using no-code tools like Figma, Illustrator, and Photoshop. My journey in design 
                  started with a curiosity about how digital experiences can be simplified and made 
                  more intuitive.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my B.Tech in Information Technology, I combine technical knowledge 
                  with creative design thinking. I'm a tech enthusiast who loves exploring new ways to 
                  bridge the gap between complex functionality and user-friendly interfaces.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies in recreating popular applications with pixel-perfect accuracy, 
                  ensuring both visual appeal and functional usability. I believe great design should 
                  not only look beautiful but also solve real problems for users.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education Section */}
          <div className="space-y-6 animate-slide-up">
            <Card className="glow-border">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text flex items-center gap-3">
                  <GraduationCap className="h-6 w-6" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                      <div className="absolute left-0 top-1 w-3 h-3 bg-primary rounded-full shadow-glow"></div>
                      {index < education.length - 1 && (
                        <div className="absolute left-1.5 top-4 w-0.5 h-16 bg-border"></div>
                      )}
                      <div className="space-y-2">
                        <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {edu.period}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            edu.status === "Current" 
                              ? "bg-primary/20 text-primary" 
                              : "bg-muted text-muted-foreground"
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;