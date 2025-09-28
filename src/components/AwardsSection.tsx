import { Award, Trophy, Star, Medal } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AwardsSection() {
  const awards = [
    {
      icon: Trophy,
      title: "Bharat Gaurav Award",
      year: "2021",
      description: "Prestigious national recognition for exceptional service to the nation and outstanding contributions to society.",
      category: "National Recognition",
      gradient: "bg-gradient-hero",
      borderColor: "border-l-primary"
    },
    {
      icon: Star,
      title: "Kshetra Ratna Puraskar",
      year: "2020",
      description: "Regional excellence award honoring dedicated service and significant achievements in public welfare and development.",
      category: "Regional Excellence",
      gradient: "bg-gradient-service",
      borderColor: "border-l-secondary"
    },
    {
      icon: Medal,
      title: "Maharashtra Youth Icon Award",
      year: "2019",
      description: "State-level recognition for inspiring leadership and positive influence on youth development and empowerment.",
      category: "Youth Leadership",
      gradient: "bg-gradient-trust",
      borderColor: "border-l-accent"
    }
  ];

  const recognitions = [
    "Featured in Maharashtra Government Youth Development Publications",
    "Honored by Indian Army Veterans Association for Community Service",
    "Recognized by Agricultural Universities for Sustainable Farming Advocacy",
    "Commended by Environmental Organizations for Conservation Efforts",
    "Acknowledged by Educational Institutions for Student Support Programs"
  ];

  return (
    <section id="awards" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Awards & <span className="bg-gradient-hero bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Honored with prestigious awards recognizing dedicated service, leadership excellence, 
            and significant contributions to society and national development.
          </p>
        </div>

        {/* Major Awards */}
        <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className={`group p-8 shadow-card hover:shadow-glow transition-all duration-500 border-l-8 ${award.borderColor} bg-card/50 backdrop-blur-sm`}>
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Award Icon and Year */}
                <div className="flex items-center space-x-6">
                  <div className={`w-20 h-20 rounded-2xl ${award.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 flex-shrink-0`}>
                    <award.icon size={36} className="text-white" />
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {award.year}
                    </div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wider">
                      {award.category}
                    </div>
                  </div>
                </div>

                {/* Award Details */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {award.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Recognitions */}
        <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Additional <span className="text-primary">Recognitions</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Various institutions and organizations have acknowledged Dr. Aglawe's 
              contributions across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recognitions.map((recognition, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-background/50 shadow-card">
                <div className="w-2 h-2 rounded-full bg-gradient-hero mt-3 flex-shrink-0"></div>
                <p className="text-muted-foreground leading-relaxed">{recognition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-6 bg-gradient-subtle rounded-2xl shadow-card">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent">15+</div>
              <div className="text-sm text-muted-foreground">Years of Service</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-service bg-clip-text text-transparent">3</div>
              <div className="text-sm text-muted-foreground">Major Awards</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-trust bg-clip-text text-transparent">25+</div>
              <div className="text-sm text-muted-foreground">Recognitions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}