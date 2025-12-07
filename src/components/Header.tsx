import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/Maglaw New logo.jpg";

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== "/"
          ? "bg-[#4A1A2C] py-3 shadow-md"
          : "bg-[#4A1A2C] py-5"
      } text-white`}
    >
      <div className="container mx-auto px-4 flex items-center">

        {/* LOGO FIXED */}
        <button onClick={() => scrollTo("hero")} className="flex-shrink-0">
          <img
            src={logo}
            alt="MAGLAW"
            className="h-11 w-auto object-contain"
          />
        </button>

        {/* MENU */}
        <nav className="hidden lg:flex items-center space-x-6 ml-auto">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="px-4 py-2 hover:bg-white/10 rounded transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block ml-6">
          <a href="https://calendly.com/aggarwalmuskaan37" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-[#4A1A2C] hover:bg-white/90">
              Book Consultation
            </Button>
          </a>
        </div>

        {/* MOBILE */}
        <button
          className="lg:hidden ml-auto"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>
    </header>
  );
}
