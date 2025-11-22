import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mag-law-logo.jpg";

const menuItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Practice Areas", id: "practice-areas" },
  { label: "Legal Insights", id: "blogs" },
  { label: "Team", id: "team" },
  { label: "Case Studies", id: "case-studies" },
  { label: "FAQs", id: "faqs" },
  { label: "Contact", id: "contact" }
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = menuItems.map((i) => i.id);

    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-[#4A1A2C]/90 backdrop-blur-md py-3 shadow-lg" : "bg-[#4A1A2C] py-5"
      } text-white`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">

        <button onClick={() => scrollToSection("hero")}>
          <img src={logo} className="h-12 w-auto" />
        </button>

        <nav className="hidden lg:flex items-center space-x-6 ml-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 rounded-md transition ${
                activeSection === item.id ? "bg-white text-[#4A1A2C]" : "text-white hover:text-pink-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block ml-6">
          <Button className="bg-white text-[#4A1A2C] hover:bg-white/90">
            <a href="https://calendly.com" target="_blank">
              Book Consultation
            </a>
          </Button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
};

export default Header;
