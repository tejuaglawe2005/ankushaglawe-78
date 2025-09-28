import { Target, Eye, Users, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function VisionSection() {
  const visionPoints = [
    {
      icon: Users,
      title: "Self-Reliant Communities",
      description: "Building strong, independent communities where every individual has access to quality education and sustainable livelihoods."
    },
    {
      icon: Target,
      title: "Progressive Policies",
      description: "Implementing forward-thinking policy reforms that address modern challenges while preserving our cultural values."
    },
    {
      icon: Eye,
      title: "Sustainable Development",
      description: "Creating a thriving environment through sustainable practices that benefit both current and future generations."
    }
  ];

  const missionAreas = [
    {
      title: "Education Reform",
      description: "Revolutionizing educational systems to provide equal opportunities and modern skills for all students.",
      gradient: "bg-gradient-trust"
    },
    {
      title: "Agricultural Innovation",
      description: "Promoting sustainable farming techniques and supporting farmers with modern technology and resources.",
      gradient: "bg-gradient-service"
    },
    {
      title: "Community Development",
      description: "Strengthening social fabric through inclusive programs that uplift every section of society.",
      gradient: "bg-gradient-hero"
    },
    {
      title: "Environmental Protection",
      description: "Leading conservation efforts and environmental sustainability initiatives for a greener future.",
      gradient: "bg-gradient-service"
    }
  ];

  return (
    <section id="vision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Vision & <span className="bg-gradient-hero bg-clip-text text-transparent">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Working towards a transformative future where every citizen enjoys prosperity, 
            education, and opportunities in a sustainable and just society.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="mb-16">
          <Card className="p-8 lg:p-12 shadow-glow bg-gradient-subtle border-0">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-gradient-hero mx-auto flex items-center justify-center shadow-elegant">
                <Eye size={36} className="text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Our Vision</h3>
              <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto font-medium">
                "A self-reliant India where every individual has access to education, 
                sustainable livelihoods, and a thriving environment that ensures prosperity 
                and justice for all."
              </blockquote>
            </div>
          </Card>
        </div>

        {/* Vision Points */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {visionPoints.map((point, index) => (
            <Card key={index} className="group p-6 shadow-card hover:shadow-glow transition-all duration-500 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-gradient-hero mx-auto flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500">
                  <point.icon size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {point.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Mission Areas */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Mission <span className="text-primary">Areas</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Focused initiatives driving meaningful change across key sectors 
              that impact community development and national progress.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {missionAreas.map((area, index) => (
              <Card key={index} className="group p-6 shadow-card hover:shadow-glow transition-all duration-500 border-l-4 border-l-primary">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg ${area.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 flex-shrink-0`}>
                    <ArrowRight size={20} className="text-white" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12 shadow-card">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
            Join the Movement
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
            Together, we can build the India of our dreams. Your support and participation 
            are crucial in making this vision a reality for every citizen.
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-base px-8 py-6"
          >
            Get Involved Today
          </Button>
        </div>
      </div>
    </section>
  );
}