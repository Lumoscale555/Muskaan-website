import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/mag-law-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-burgundy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="MAG.LAW" className="h-16 w-auto mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Your trusted partner in legal excellence. Delivering comprehensive legal solutions with integrity and expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/practice-areas/corporate-law" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Corporate Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/civil-law" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Civil Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/criminal-law" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Criminal Law
                </Link>
              </li>
              <li>
                <Link to="/practice-areas/family-law" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Family Law
                </Link>
              </li>
              <li>
                <Link to="/#practice-areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  View All
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                123 Brigade Road<br />
                Bangalore, Karnataka 560001
              </li>
              <li>
                Phone: +91 98765 43210
              </li>
              <li>
                Email: contact@mag.law
              </li>
              <li className="pt-2">
                <span className="text-primary-foreground font-medium">Mon-Fri:</span> 9:00 AM - 6:00 PM<br />
                <span className="text-primary-foreground font-medium">Sat:</span> 10:00 AM - 2:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} MAG.LAW. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
