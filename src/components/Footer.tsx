import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/Maglaw New logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-burgundy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <img src={logo} alt="MAG.LAW" className="h-16 w-auto mb-6" />
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Your trusted partner in legal excellence. Delivering comprehensive legal solutions with integrity and expertise.
            </p>

            <a
              href="https://www.linkedin.com/company/maglaw-advisors-and-consultants"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-primary-foreground/30 rounded hover:bg-primary-foreground/10 transition"
            >
              <Linkedin size={18} />
              Follow on LinkedIn
            </a>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <Link to="/" className="hover:text-white">Home</Link>
              <Link to="/#about" className="hover:text-white">About</Link>
              <Link to="/practice-areas" className="hover:text-white">Practice Areas</Link>
              <Link to="/blogs" className="hover:text-white">Legal Insights</Link>
              <Link to="/#team" className="hover:text-white">Team</Link>
              <Link to="/case-studies" className="hover:text-white">Case Studies</Link>
              <Link to="/faqs" className="hover:text-white">FAQs</Link>
              <Link to="/#contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Get in Touch</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              34 T, First Floor, 11th Main Road,<br />
              Jayanagar, Bengaluru, Karnataka 560041, India
            </p>
            <p className="mt-4 text-primary-foreground/80">Phone, +91 81056 26011</p>
            <p className="text-primary-foreground/80">Email, team@maglaw.in</p>
          </div>

          {/* LINKEDIN EMBED */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Latest on LinkedIn</h3>

            <div className="bg-white rounded overflow-hidden shadow-md">

              <iframe
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:7402240674537881600?collapsed=1"
                height="280"
                width="100%"
                frameBorder="0"
                allowFullScreen
                title="Maglaw LinkedIn Post"
                className="block"
              />

            </div>
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
