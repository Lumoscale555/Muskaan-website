import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect } from "react";

const practiceAreas = [
  {
    number: "01",
    title: "Corporate Law, Governance and Secretarial Services",
    description:
      "End to end support under the Companies Act including governance, board management, SOP creation, and regulatory representation.",
    slug: "corporate-governance-secretarial"
  },
  {
    number: "02",
    title: "Business Setup and Startup Consulting",
    description:
      "Complete assistance for entrepreneurs and global companies setting up business operations in India including incorporation, licenses and Startup India support.",
    slug: "business-setup-startup"
  },
  {
    number: "03",
    title: "Mergers, Acquisitions and Business Restructuring",
    description:
      "Strategic M and A and restructuring solutions including hive offs, slump sale, succession planning and negotiation of transaction documents.",
    slug: "mergers-acquisitions-restructuring"
  },
  {
    number: "04",
    title: "Risk, Compliance and Due Diligence Services",
    description:
      "Legal, regulatory and financial diligence for transactions including ESG checks, compliance health audits and red flag reporting.",
    slug: "risk-compliance-due-diligence"
  },
  {
    number: "05",
    title: "Insolvency and Bankruptcy Support",
    description:
      "End to end IBC support including CIRP, liquidation, voluntary liquidation, claim verification, distribution and filings before NCLT and DRT.",
    slug: "insolvency-bankruptcy"
  },
  {
    number: "06",
    title: "Foreign Exchange Law and Cross Border Transaction Advisory",
    description:
      "Strategic advice on FDI, ECB, outbound investments, regulatory approvals, FEMA compliance and structuring of international transactions.",
    slug: "fema-cross-border"
  },
  {
    number: "07",
    title: "Capital Markets and Fundraising Advisory",
    description:
      "Structured fundraising and capital market support for startups and enterprises including investor engagement, IPO readiness, and regulatory compliance.",
    slug: "capital-markets-fundraising"
  },
  {
    number: "08",
    title: "ESG and Sustainability",
    description:
      "Sustainability advisory including ESG policy creation, regulatory reporting, environmental compliance and stakeholder engagement strategies.",
    slug: "esg-sustainability"
  },
  {
    number: "09",
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
    <section
      id="practice-areas"
      className="py-16 bg-background relative overflow-hidden min-h-screen flex items-start"
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="inline-flex items-center px-4 py-1 rounded-full bg-primary/5 text-primary text-xs tracking-[0.2em] uppercase mb-3">
            Practice Areas
          </p>

          <h2 className="text-5xl font-serif font-bold text-foreground mb-4">
            MAGLAW Practice Areas
          </h2>

          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Advisory blending legal precision with commercial insight across
            governance, capital structuring and cross border transactions.
          </p>
        </motion.div>

        {/* COMPACT CARD GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceAreas.map((area, index) => (
            <motion.div
              id={`card-${area.slug}`}
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.04 }}
              viewport={{ once: true }}
              className="rounded-xl border border-border/40 bg-card shadow-sm p-4 hover:shadow transition-all cursor-pointer flex flex-col"
            >
              <div className="text-xl font-serif font-bold text-primary mb-1 opacity-80">
                {area.number}
              </div>

              <h3 className="text-base font-semibold text-foreground leading-snug mb-2">
                {area.title}
              </h3>

              <p className="text-xs text-muted-foreground leading-tight line-clamp-3 mb-4">
                {area.description}
              </p>

              {/* Button fixed to bottom */}
              <div className="mt-auto">
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all text-xs h-8"
                >
                  <Link to={`/practice-areas/${area.slug}`} state={{ fromCard: area.slug }}>
                    View More
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
