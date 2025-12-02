import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/Maglaw New logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-burgundy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          <div>
            <img src={logo} alt="MAG.LAW" className="h-16 w-auto mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Your trusted partner in legal excellence. Delivering comprehensive legal solutions with integrity and expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/maglaw-advisors-and-consultants"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>

              <Link to="/#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </Link>

              <Link to="/practice-areas" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Practice Areas
              </Link>

              <Link to="/blogs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Legal Insights
              </Link>

              <Link to="/#team" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Team
              </Link>

              <Link to="/case-studies" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Case Studies
              </Link>

              <Link to="/faqs" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                FAQs
              </Link>

              <Link to="/#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Get in Touch</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                34 T, First Floor<br />
                11th Main Road, Jayanagar<br />
                Bengaluru, Karnataka 560041<br />
                India
              </li>
              <li>Phone: +91 81056 26011</li>
              <li>Email: team@maglaw.in</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 text-center text-primary-foreground/60 text-sm">
          © {new Date().getFullYear()} MAG.LAW. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
