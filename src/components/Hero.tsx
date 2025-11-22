import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY * 0.12;

      bgRef.current.style.transform = `
        translateY(${y}px)
        scale(1.18)
      `;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToAbout = () => {
    const section = document.getElementById("about");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">

      {/* Parallax Background */}
      <motion.div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 will-change-transform"
        style={{ backgroundImage: `url(${heroBackground})` }}
        initial={{ opacity: 0, scale: 1.25 }}
        animate={{ opacity: 0.55, scale: 1.18 }}
        transition={{ duration: 2.2 }}
      />

      {/* Light Fade */}
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/90 to-transparent pointer-events-none"></div>

      {/* Soft Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[900px] h-[900px] bg-gradient-radial from-white/50 to-transparent blur-3xl top-1/3 left-1/2 -translate-x-1/2"></div>
      </div>

      {/* Main Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className="relative z-20 backdrop-blur-2xl bg-white/60 border border-white/40 shadow-2xl rounded-3xl px-12 py-14 max-w-4xl mx-auto text-center"
      >
        <motion.div
          className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/25 to-white/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.8 }}
        />

        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-8"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Strong Legal Support
          <span className="block mt-4">When You Need It Most</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-800 font-light max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
        >
          Professional guidance that protects your rights with clarity and confidence.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-[#4A1A2C] text-white hover:bg-[#4A1A2C]/90 shadow-xl text-lg px-14 py-6 rounded-xl"
            >
              <a href="https://calendly.com" target="_blank">Book a Consultation</a>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.08, y: -3 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-gray-900 text-gray-900 hover:bg-gray-100 text-lg px-14 py-6 rounded-xl"
            >
              <a href="/#practice-areas">Explore Services</a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer z-30"
        animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-12 h-12 text-gray-700" />
      </motion.div>
    </section>
  );
};

export default Hero;
