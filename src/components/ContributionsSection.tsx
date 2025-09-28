import { GraduationCap, Leaf, Heart, Shield, Trees, Users, Truck, Hospital } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function ContributionsSection() {
  const contributions = [
    {
      icon: Leaf,
      title: "'Mazi Mati Maza Desh' Campaign",
      description: "Convenor for Bhadrawati and Warora talukas, successfully implemented across 116 villages.",
      achievements: [
        "Rural development initiatives in 116 villages",
        "Agricultural awareness and farmer support programs",
        "Community empowerment through grassroots campaigns",
        "Sustainable development practices implementation"
      ],
      gradient: "bg-gradient-service",
      color: "text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Sanskrit Gram Initiative",
      description: "Adopted 96 villages in Bhadrawati taluka for comprehensive cultural and social development.",
      achievements: [
        "Cultural preservation and development programs",
        "Educational support and infrastructure development",
        "Social welfare initiatives in rural communities",
        "Youth empowerment and skill development"
      ],
      gradient: "bg-gradient-trust",
      color: "text-accent"
    },
    {
      icon: Trees,
      title: "Cleanliness & Awareness Drives",
      description: "Leading Swachhata Rath Yatra and Social Hindutva awareness campaigns across regions.",
      achievements: [
        "Swachhata Rath Yatra in multiple districts",
        "Environmental awareness campaigns",
        "Community cleanliness initiatives",
        "Social awareness and cultural programs"
      ],
      gradient: "bg-gradient-service",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Farmer Support Programs",
      description: "Comprehensive agricultural support including seed distribution and modern farming techniques.",
      achievements: [
        "Distributed seed kits to thousands of farmers",
        "Agricultural training and awareness programs",
        "Modern farming technique demonstrations",
        "Farmer welfare and support initiatives"
      ],
      gradient: "bg-gradient-hero",
      color: "text-primary"
    },
    {
      icon: Hospital,
      title: "Healthcare & Humanitarian Aid",
      description: "Regular health camps, blood donation drives, and support to monasteries and communities.",
      achievements: [
        "Regular blood donation camps organization",
        "Free health checkup programs",
        "Food and aid distribution to monasteries",
        "Healthcare support during emergencies"
      ],
      gradient: "bg-gradient-trust",
      color: "text-accent"
    },
    {
      icon: Heart,
      title: "COVID-19 Relief Operations",
      description: "Served communities 24/7 during pandemic, distributing essentials to thousands of families.",
      achievements: [
        "24/7 service during COVID-19 pandemic",
        "Essential supplies to thousands of families",
        "Amritdhara Initiative helping 21,000+ families",
        "Emergency relief and support coordination"
      ],
      gradient: "bg-gradient-hero",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Human Rights & Social Justice",
      description: "Through Central Human Rights Organization, supporting education, women, farmers, and marginalized communities.",
      achievements: [
        "Educational support for underprivileged children",
        "Women empowerment and support programs",
        "Farmers' rights advocacy and assistance",
        "Support for differently-abled and poor communities"
      ],
      gradient: "bg-gradient-service",
      color: "text-secondary"
    }
  ];

  return (
    <section id="contributions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Social <span className="bg-gradient-service bg-clip-text text-transparent">Contributions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dedicated service across multiple sectors, creating lasting positive impact 
            in communities throughout Maharashtra through grassroots initiatives and social reform.
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
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">116</div>
            <div className="text-muted-foreground">Villages in Campaign</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-service bg-clip-text text-transparent">96</div>
            <div className="text-muted-foreground">Villages Adopted</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-trust bg-clip-text text-transparent">21,000+</div>
            <div className="text-muted-foreground">Families Helped</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl lg:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">24/7</div>
            <div className="text-muted-foreground">COVID Service</div>
          </div>
        </div>
      </div>
    </section>
  );
}