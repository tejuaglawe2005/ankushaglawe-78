import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Dr. Ankush Aglawe
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contributions")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contributions
            </button>
            <button
              onClick={() => scrollToSection("awards")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Awards
            </button>
            <button
              onClick={() => scrollToSection("vision")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contributions")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contributions
              </button>
              <button
                onClick={() => scrollToSection("awards")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Awards
              </button>
              <button
                onClick={() => scrollToSection("vision")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Vision
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}