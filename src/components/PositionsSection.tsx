import { Crown, Users, Shield, GraduationCap, Building, Heart, Scale } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function PositionsSection() {
  const positions = [
    {
      icon: Crown,
      title: "District President (Jila Adhyaksh)",
      organization: "Bharatiya Janata Party (BJP)",
      description: "Leading the party organization at district level with progressive policies and grassroots development initiatives.",
      current: true,
      gradient: "bg-gradient-hero"
    },
    {
      icon: Users,
      title: "Founder & President",
      organization: "Gurudev Vyayam Shala, Bhadrawati, Chandrapur",
      description: "Established and leading physical fitness and character development programs for youth in the community.",
      current: true,
      gradient: "bg-gradient-service"
    },
    {
      icon: Scale,
      title: "Head, Dispute-Free Farmers Service Committee",
      organization: "Warora Taluka",
      description: "Leading conflict resolution and support services for farmers, ensuring peaceful agricultural practices.",
      current: true,
      gradient: "bg-gradient-trust"
    },
    {
      icon: Heart,
      title: "District Head",
      organization: "Shri Gurudev Sanstha",
      description: "Overseeing spiritual and social welfare activities through the organization's various community programs.",
      current: true,
      gradient: "bg-gradient-service"
    },
    {
      icon: GraduationCap,
      title: "District Coordinator",
      organization: "Jain Vivek Vidya Niketan School International Belt Block, Don",
      description: "Coordinating educational initiatives and ensuring quality education delivery in the region.",
      current: true,
      gradient: "bg-gradient-trust"
    },
    {
      icon: Shield,
      title: "President",
      organization: "Central Human Rights Organization, New Delhi",
      description: "Leading human rights advocacy and protection initiatives at national level, supporting marginalized communities.",
      current: true,
      gradient: "bg-gradient-hero"
    }
  ];

  return (
    <section id="positions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Positions <span className="bg-gradient-hero bg-clip-text text-transparent">Held</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Leadership roles across various organizations, driving positive change and 
            serving communities through diverse platforms and initiatives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {positions.map((position, index) => (
            <Card key={index} className="group p-6 shadow-card hover:shadow-glow transition-all duration-500 border-l-4 border-l-primary bg-card/50 backdrop-blur-sm">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4">
                  <div className={`w-14 h-14 rounded-xl ${position.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 flex-shrink-0`}>
                    <position.icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {position.title}
                      </h3>
                      {position.current && (
                        <span className="px-2 py-1 text-xs font-medium bg-gradient-hero text-white rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h4 className="text-primary font-semibold mb-3">
                      {position.organization}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {position.description}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Leadership Impact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 lg:p-12 shadow-card">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Leadership <span className="text-primary">Impact</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Through these leadership positions, Dr. Aglawe continues to serve diverse communities, 
              from political representation to social welfare, education, and human rights advocacy.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-2">6+</div>
                <div className="text-muted-foreground">Active Positions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-service bg-clip-text text-transparent mb-2">Multiple</div>
                <div className="text-muted-foreground">Sectors Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-trust bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}