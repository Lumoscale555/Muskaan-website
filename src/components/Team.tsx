import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import MuskaanImg from "../assets/Muskaan.jpg";
import SasirekhaImg from "../assets/Sasirekha.jpg";
import KritiImg from "../assets/Kriti.jpg";

const teamMembers = [
  {
    name: "CS Muskaan Aggarwal",
    roleLine1: "Founder and Managing Partner",
    roleLine2: "Practising Company Secretary",
    image: MuskaanImg,
    linkedin: "https://www.linkedin.com/in/csmuskaan",
    email: "muskaan@maglaw.in"
  },
  {
    name: "CS Shashirekha Hegde",
    roleLine1: "Lead",
    roleLine2: "Corporate Secretarial and Restructuring",
    image: SasirekhaImg,
    linkedin: "https://www.linkedin.com/in/cs-shashirekha-hegde-63b778239/",
    email: "shashirekha@maglaw.in"
  },
  {
    name: "Adv. Kriti Saxena",
    roleLine1: "Lead",
    roleLine2: "Corporate Legal and Real Estate",
    image: KritiImg,
    linkedin: "https://www.linkedin.com/in/kritiisaxenaa",
    email: "team@maglaw.in"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-28 bg-gradient-soft">
      <div className="container mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-5xl font-serif font-bold mb-3">
            Our <span className="text-gradient-burgundy">Leadership</span>
          </h2>
          <p className="text-muted-foreground">
            Trusted professionals delivering legal and regulatory excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4">

          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-premium bg-white"
            >

              {/* IMAGE SECTION FULL COVER */}
              <div className="relative h-[400px] w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover object-center transform group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* DETAILS */}
              <div className="p-6 text-center bg-white">
                <h3 className="font-serif font-semibold text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-medium">
                  {member.roleLine1}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.roleLine2}
                </p>

                {/* ICONS */}
                <div className="flex justify-center gap-4 mt-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="h-10 w-10 rounded-full flex items-center justify-center bg-primary/10 hover:bg-primary hover:text-white transition"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
