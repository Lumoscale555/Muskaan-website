import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Muskaan",
    position: "Founder and Lead Advocate",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    linkedin: "#",
    email: "muskaan@mag.law"
  },
  {
    name: "Advocate Rajesh Kumar",
    position: "Senior Corporate Lawyer",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80",
    linkedin: "#",
    email: "rajesh@mag.law"
  },
  {
    name: "Advocate Priya Sharma",
    position: "Family Law Specialist",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    linkedin: "#",
    email: "priya@mag.law"
  },
  {
    name: "Advocate Vikram Singh",
    position: "Criminal Defense Attorney",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    linkedin: "#",
    email: "vikram@mag.law"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient-burgundy">Expert Team</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team brings experience and dedication to every matter.
          </p>
        </motion.div>

        {/* Infinite Smooth Scroll */}
        <div className="relative overflow-hidden group">
          <div className="flex space-x-8 animate-scroll group-hover:pause-scroll py-4">
            {[...teamMembers, ...teamMembers].map((member, idx) => (
              <div
                key={idx}
                className="min-w-[320px] bg-card rounded-2xl shadow-md border border-border/40 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold">{member.name}</h3>
                  <p className="text-muted-foreground mt-1 mb-4">{member.position}</p>

                  <div className="flex gap-4">
                    <a
                      href={member.linkedin}
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
