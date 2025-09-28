import { GraduationCap, Shield, Heart, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Ph.D. in Agriculture",
      description: "Expert in sustainable farming and rural development",
      color: "text-secondary"
    },
    {
      icon: Shield,
      title: "Former Indian Army",
      description: "Served the nation with dedication and honor",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "Social Worker",
      description: "Committed to community welfare and social justice",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Jila Adhyaksh",
      description: "Leading with progressive policies and vision",
      color: "text-primary"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Dr. Aglawe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A dedicated leader with deep roots in agriculture, military service, and social welfare, 
            committed to building a self-reliant and prosperous India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Biography */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Early Life & Education</h3>
              <p className="text-muted-foreground leading-relaxed">
                Born in Patala, Beed, Dr. Ankush Kisanrao Aglawe grew up with a deep connection to 
                rural India and its challenges. His journey from the fields of Maharashtra to earning 
                a Ph.D. in Agriculture reflects his unwavering commitment to understanding and solving 
                the problems faced by farmers and rural communities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Military Service</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Aglawe's service in the Indian Army instilled in him the values of discipline, 
                leadership, and selfless service to the nation. This experience shaped his approach 
                to public service and his dedication to protecting the interests of soldiers, veterans, 
                and their families.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Mission & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                His lifelong mission centers on empowering youth through education, promoting sustainable 
                agriculture practices, and ensuring social justice for all. As Jila Adhyaksh, he continues 
                to work tirelessly for policy reforms and community-driven initiatives.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary">
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-subtle flex items-center justify-center ${highlight.color}`}>
                    <highlight.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center bg-gradient-subtle rounded-2xl p-8 lg:p-12 shadow-card">
          <blockquote className="text-2xl lg:text-3xl font-medium text-foreground leading-relaxed mb-6">
            "Empowering the youth, strengthening rural communities, and building a prosperous nation – 
            this is my commitment to society."
          </blockquote>
          <cite className="text-primary font-semibold">— Dr. Ankush Kisanrao Aglawe</cite>
        </div>
      </div>
    </section>
  );
}