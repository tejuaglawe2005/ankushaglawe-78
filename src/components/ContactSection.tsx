import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:ankushaglawe3@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message Prepared",
      description: "Your default email client will open with the message prepared.",
    });

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      info: "ankushaglawe3@gmail.com",
      description: "Send us an email for any inquiries",
      href: "mailto:ankushaglawe3@gmail.com",
      gradient: "bg-gradient-hero"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+91 9881769072",
      description: "Call us for urgent matters",
      href: "tel:+919881769072",
      gradient: "bg-gradient-service"
    },
    {
      icon: MapPin,
      title: "Location",
      info: "Warora, Maharashtra",
      description: "Visit us at our office",
      href: "#",
      gradient: "bg-gradient-trust"
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      username: "@ankushaglawe",
      href: "https://instagram.com/ankushaglawe",
      color: "hover:text-pink-500"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      username: "Dr Ankush Aglawe",
      href: "https://facebook.com/DrAnkushAglawe",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      username: "@ankushaglawe", 
      href: "https://twitter.com/ankushaglawe",
      color: "hover:text-blue-400"
    },
    {
      icon: Youtube,
      name: "YouTube",
      username: "Dr Ankush Aglawe",
      href: "https://youtube.com/@DrAnkushAglawe",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you. 
            Reach out through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            {contactMethods.map((method, index) => (
              <Card key={index} className="group p-6 shadow-card hover:shadow-glow transition-all duration-500 border-l-4 border-l-primary">
                <a
                  href={method.href}
                  className="flex items-start space-x-4"
                  {...(method.href.startsWith('http') && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  <div className={`w-12 h-12 rounded-lg ${method.gradient} flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-500 flex-shrink-0`}>
                    <method.icon size={20} className="text-white" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-foreground font-medium">{method.info}</p>
                    <p className="text-muted-foreground text-sm">{method.description}</p>
                  </div>
                </a>
              </Card>
            ))}

            {/* Social Media */}
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow on Social Media</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon size={20} />
                    <div className="text-sm">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs opacity-75">{social.username}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="shadow-card"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="shadow-card"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    required
                    className="shadow-card"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={6}
                    required
                    className="shadow-card resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-base px-8 py-6"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>

              <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  Your message will open in your default email client. 
                  Alternatively, you can directly email us at{" "}
                  <a href="mailto:ankushaglawe3@gmail.com" className="text-primary hover:underline font-medium">
                    ankushaglawe3@gmail.com
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}