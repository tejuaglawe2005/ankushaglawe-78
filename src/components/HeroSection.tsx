import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";
import heroPortrait from "@/assets/dr-ankush-portrait.jpg";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm">
                Jila Adhyaksh • Politician • Social Worker
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Dr. Ankush <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Kisanrao Aglawe
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Empowering communities through dedicated service, sustainable agriculture, 
                and progressive leadership for a self-reliant India.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="lg"
                onClick={scrollToContact}
                className="text-base px-8 py-6"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-base px-8 py-6"
              >
                Learn More
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <span className="text-sm text-muted-foreground font-medium">Follow:</span>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/ankushaglawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/DrAnkushAglawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://twitter.com/ankushaglawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="https://youtube.com/@DrAnkushAglawe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>ankushaglawe3@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9881769072</span>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-hero rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-glow border-4 border-primary/20">
                <img
                  src={heroPortrait}
                  alt="Dr. Ankush Kisanrao Aglawe - Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}