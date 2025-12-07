import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

import MuskaanImg from "../assets/Muskaan2.jpg";
import SasirekhaImg from "../assets/Sasirekha.jpg";
import KritiImg from "../assets/Kriti.jpg";

const teamMembers = [
  {
    name: "CS Muskaan Aggarwal",
    role1: "Founder and Managing Partner",
    role2: "Peer reviewed Practising Company Secretary",
    qualification: "B.B.A., LL.B., LLM (Corporate Laws), ACS",
    image: MuskaanImg,
    email: "muskaan@maglaw.in",
    linkedin: "https://www.linkedin.com/in/csmuskaan"
  },
  {
    name: "CS Shashirekha Hegde",
    role1: "Lead",
    role2: "Corporate Secretarial and Restructuring",
    qualification: "B.Com, ACS",
    image: SasirekhaImg,
    email: "shashirekha@maglaw.in",
    linkedin: "https://www.linkedin.com/in/cs-shashirekha-hegde-63b778239/"
  },
  {
    name: "Adv. Kriti Saxena",
    role1: "Lead",
    role2: "Corporate Legal and Real Estate",
    qualification: "B.B.A., LL.B., LLM (Constitutional Laws)",
    image: KritiImg,
    email: "team@maglaw.in",
    linkedin: "https://www.linkedin.com/in/kritiisaxenaa"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-serif font-bold">
            Our <span className="text-[#9d1c2a]">Leaders</span>
          </h2>
          <p className="text-gray-500 mt-4">
            Trusted professionals delivering legal and regulatory excellence.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {teamMembers.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="border bg-white shadow-sm rounded-md relative h-[440px] flex flex-col justify-between overflow-hidden"
            >
              {/* TOP STRIPE */}
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[#9d1c2a]" />

              {/* IMAGE */}
              <div className="mt-8 flex justify-center h-[170px]">
                <div className="w-[120px] h-[150px] rounded-sm overflow-hidden border">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* CENTER CONTENT */}
              <div className="px-8 text-center mt-2 flex flex-col justify-start h-[155px]">

                <h3 className="text-xl font-serif font-bold text-[#9d1c2a] min-h-[32px] flex items-center justify-center">
                  {m.name}
                </h3>

                <p className="mt-2 text-sm font-semibold text-black uppercase tracking-wide min-h-[22px]">
                  {m.role1}
                </p>

                <p className="text-gray-600 text-sm min-h-[22px]">
                  {m.role2}
                </p>

                <p className="text-xs text-gray-500 mt-2 italic min-h-[18px]">
                  {m.qualification}
                </p>

              </div>

              {/* FOOTER */}
              <div className="border-t px-6 py-4 text-sm text-[#9d1c2a] flex flex-col gap-2 items-center bg-gray-50">
                <a
                  href={`mailto:${m.email}`}
                  className="flex items-center gap-2 hover:underline"
                >
                  <Mail size={16} />
                  {m.email}
                </a>
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:underline"
                >
                  <Linkedin size={16} />
                  LinkedIn Profile
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;
