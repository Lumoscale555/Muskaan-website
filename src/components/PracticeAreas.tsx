import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Building2,
  Briefcase,
  GitMerge,
  ShieldCheck,
  Scale,
  Globe,
  TrendingUp,
  Leaf,
  HeartHandshake
} from "lucide-react";
import { useEffect } from "react";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law, Governance and Secretarial Services",
    description:
      "End to end support under the Companies Act including governance, board management, SOP creation, and regulatory representation.",
    slug: "corporate-governance-secretarial"
  },
  {
    icon: Briefcase,
    title: "Business Setup and Startup Consulting",
    description:
      "Complete assistance for entrepreneurs and global companies setting up business operations in India including incorporation, licenses and Startup India support.",
    slug: "business-setup-startup"
  },
  {
    icon: GitMerge,
    title: "Mergers, Acquisitions and Business Restructuring",
    description:
      "Strategic M and A and restructuring solutions including hive offs, slump sale, succession planning and negotiation of transaction documents.",
    slug: "mergers-acquisitions-restructuring"
  },
  {
    icon: ShieldCheck,
    title: "Risk, Compliance and Due Diligence Services",
    description:
      "Legal, regulatory and financial diligence for transactions including ESG checks, compliance health audits and red flag reporting.",
    slug: "risk-compliance-due-diligence"
  },
  {
    icon: Scale,
    title: "Insolvency and Bankruptcy Support",
    description:
      "End to end IBC support including CIRP, liquidation, voluntary liquidation, claim verification, distribution and filings before NCLT and DRT.",
    slug: "insolvency-bankruptcy"
  },
  {
    icon: Globe,
    title: "Foreign Exchange Law and Cross Border Transaction Advisory",
    description:
      "Strategic advice on FDI, ECB, outbound investments, regulatory approvals, FEMA compliance and structuring of international transactions.",
    slug: "fema-cross-border"
  },
  {
    icon: TrendingUp,
    title: "Capital Markets and Fundraising Advisory",
    description:
      "Structured fundraising and capital market support for startups and enterprises including investor engagement, IPO readiness, and regulatory compliance.",
    slug: "capital-markets-fundraising"
  },
  {
    icon: Leaf,
    title: "ESG and Sustainability",
    description:
      "Sustainability advisory including ESG policy creation, regulatory reporting, environmental compliance and stakeholder engagement strategies.",
    slug: "esg-sustainability"
  },
  {
    icon: HeartHandshake,
    title: "Corporate Social Responsibility Support",
    description:
      "Complete CSR ecosystem support including applicability checks, CSR policy drafting, project monitoring, and agreements with implementing agencies.",
    slug: "csr-support"
  }
];

const PracticeAreas = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToCard = location.state?.scrollToCard;
    if (scrollToCard) {
      setTimeout(() => {
        const card = document.getElementById(`card-${scrollToCard}`);
        if (card) {
          card.scrollIntoView({ behavior: "auto", block: "center" });
        }
      }, 50);
    }
  }, [location.state]);

  return (
    <section id="practice-areas" className="py-24 bg-background relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,27,69,0.12),_transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-primary/5 text-primary text-xs tracking-[0.2em] uppercase mb-4">
            Practice Areas
          </p>
          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            MAGLAW <span className="text-gradient-burgundy">Practice Areas</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Advisory that blends legal precision with commercial insight across capital markets, corporate governance and cross border transactions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {practiceAreas.map((area, index) => (
            <motion.div
              id={`card-${area.slug}`}
              key={area.slug}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6 }}
              className="relative group rounded-3xl border border-border/50 bg-gradient-to-br from-card to-card/80 shadow-elegant overflow-hidden"
            >
              <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/25 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />

              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center rounded-2xl p-4 bg-primary/8 border border-primary/15 shadow-inner group-hover:bg-primary/15 group-hover:border-primary/40 transition-all duration-500">
                    <area.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                  {area.title}
                </h3>

                {/* FIXED HEIGHT DESCRIPTION */}
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6 h-[96px] overflow-hidden">
                  {area.description}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Link to={`/practice-areas/${area.slug}`} state={{ fromCard: area.slug }}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
