import { GraduationCap, Leaf, Heart, Shield, Trees } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContributionsSection() {
  const contributions = [
    {
      icon: GraduationCap,
      title: "Education & Youth Empowerment",
      description: "Providing free coaching and educational opportunities to students from underprivileged backgrounds.",
      achievements: [
        "Free coaching programs for competitive exams",
        "Educational scholarships for deserving students",
        "Career guidance and mentorship initiatives",
        "Digital literacy programs in rural areas"
      ],
      gradient: "bg-gradient-trust",
      color: "text-accent"
    },
    {
      icon: Leaf,
      title: "Agriculture & Rural Development", 
      description: "Leading farmer awareness campaigns and promoting sustainable organic farming practices.",
      achievements: [
        "Organic farming workshops and training",
        "Modern agricultural technique demonstrations", 
        "Farmer welfare schemes and support programs",
        "Rural infrastructure development initiatives"
      ],
      gradient: "bg-gradient-service",
      color: "text-secondary"
    },
    {
      icon: Trees,
      title: "Environmental Conservation",
      description: "Championing environmental protection through massive tree plantation drives.",
      achievements: [
        "10,000+ trees planted across the region",
        "Environmental awareness campaigns",
        "Water conservation projects",
        "Sustainable development initiatives"
      ],
      gradient: "bg-gradient-service",
      color: "text-secondary"
    },
    {
      icon: Heart,
      title: "Healthcare Initiatives",
      description: "Organizing health camps and providing medical assistance to communities in need.",
      achievements: [
        "Regular blood donation camps",
        "Free health checkup programs",
        "Medical aid during disasters and emergencies",
        "Health awareness and prevention campaigns"
      ],
      gradient: "bg-gradient-hero",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Support for Soldiers & Families",
      description: "Dedicated assistance programs for veterans, war widows, and martyrs' families.",
      achievements: [
        "Financial support for war widows",
        "Educational assistance for martyrs' children",
        "Healthcare support for veterans",
        "Employment opportunities for ex-servicemen"
      ],
      gradient: "bg-gradient-trust",
      color: "text-accent"
    }
  ];

  return (
    <section id="contributions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Key <span className="bg-gradient-service bg-clip-text text-transparent">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated service across multiple sectors, creating lasting positive impact 
            in communities throughout Maharashtra and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => (
            <Card key={index} className="group p-6 shadow-card hover:shadow-glow transition-all duration-500 border-0 bg-card/50 backdrop-blur-sm">
              <div className="space-y-6">
                {/* Icon and Title */}
                <div className="space-y-4">
                  <div className={`w-16 h-16 rounded-2xl ${contribution.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500`}>
                    <contribution.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {contribution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {contribution.description}
                    </p>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {contribution.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${contribution.gradient} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">10,000+</div>
            <div className="text-muted-foreground">Trees Planted</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-service bg-clip-text text-transparent">500+</div>
            <div className="text-muted-foreground">Students Supported</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-trust bg-clip-text text-transparent">100+</div>
            <div className="text-muted-foreground">Health Camps</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">50+</div>
            <div className="text-muted-foreground">Villages Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
}