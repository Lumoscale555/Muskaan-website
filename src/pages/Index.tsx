import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Blogs from "@/components/Blogs";
import Team from "@/components/Team";
import TrustedBy from "@/components/TrustedBy";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Blogs />
      <Team />
      <TrustedBy />
      <CaseStudies />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
