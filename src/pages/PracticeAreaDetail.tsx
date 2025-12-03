import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

const practiceAreaDetails: Record<string, { title: string; description: string; offerings: string[] }> = {
  "capital-markets-fundraising": {
    title: "Capital Markets and Fundraising Advisory",
    description:
      "We assist businesses from early stage startups to established enterprises with structured fundraising and public market strategies including investor narrative building, compliance checks and IPO support.",
    offerings: [
      "Startup advisory, business structuring and investor pitch development",
      "Angel, seed, venture capital, private equity and strategic investment facilitation",
      "Pre IPO readiness assessments and compliance analysis",
      "Valuation narrative and investor engagement strategy",
      "Documentation and complete IPO process management",
      "Post listing governance and regulatory support"
    ]
  },
  "corporate-governance-secretarial": {
    title: "Corporate Law, Governance and Secretarial Services",
    description:
      "Corporate legal and secretarial services aligned with the Companies Act. Complete support for governance, drafting, meetings and regulatory interface.",
    offerings: [
      "Company law advisory and compliance support",
      "Board and general meeting assistance",
      "Drafting commercial agreements including SHA and Founder Agreements",
      "Corporate governance advisory, SOP creation and policy drafting",
      "Representation before ROC, RD, Official Liquidators and MCA"
    ]
  },
  "fema-cross-border": {
    title: "Foreign Exchange Law and Cross Border Transaction Advisory",
    description:
      "Guidance on inbound and outbound investments, foreign remittances and cross border structuring under FEMA.",
    offerings: [
      "FDI, outbound investment and ECB structuring",
      "International deal structuring and legal opinions",
      "RBI and DPIIT approvals and filings",
      "Compounding applications and voluntary disclosures",
      "Representation before regulatory and enforcement authorities"
    ]
  },
  "business-setup-startup": {
    title: "Business Setup and Startup Consulting",
    description:
      "A complete one stop solution for domestic and global founders establishing a presence in India.",
    offerings: [
      "Regulatory framework advisory and entry route selection",
      "Incorporation of companies, LLPs, branch offices and liaison offices",
      "Licenses and approvals across industries",
      "Startup India registration and benefits",
      "IP registration, business search reports and due diligence",
      "End to end support including accounting, payroll and audit"
    ]
  },
  "risk-compliance-due-diligence": {
    title: "Risk, Compliance and Due Diligence Services",
    description:
      "Comprehensive diligence for transactions and compliance evaluations for ongoing business health.",
    offerings: [
      "Legal, regulatory and financial due diligence for M and A and investments",
      "Labour law audits and compliance assessments",
      "ESG diligence and red flag reporting",
      "Compliance health checks and risk mapping",
      "Drafting and review of investment contracts and agreements"
    ]
  },
  "esg-sustainability": {
    title: "ESG and Sustainability",
    description:
      "Advisory for building sustainability programs, frameworks and compliance aligned with business goals.",
    offerings: [
      "ESG strategy and sustainability framework development",
      "ESG and sustainability reporting and assurance",
      "Environmental law advisory and compliance",
      "ESG diligence for investments",
      "Sustainability monitoring and impact reporting"
    ]
  },
  "csr-support": {
    title: "Corporate Social Responsibility Support",
    description:
      "Full support for CSR compliance including policy creation, assessment and project monitoring.",
    offerings: [
      "Evaluation of CSR applicability",
      "CSR policy and action plan drafting",
      "Due diligence of implementing agencies",
      "Drafting CSR agreements and compliance reports",
      "Project monitoring and outcome based reporting"
    ]
  },
  "mergers-acquisitions-restructuring": {
    title: "Mergers, Acquisitions and Business Restructuring",
    description:
      "Legal support for business transfers, reorganizations, succession planning and corporate deals.",
    offerings: [
      "Mergers, demergers, hive offs and business transfers",
      "Private acquisitions, takeovers and succession planning",
      "Slump sale transactions and asset transfers",
      "Drafting SPAs, BTAs and non compete agreements",
      "Capital restructuring and regulatory approvals",
      "Cross border transactions and group reorganizations"
    ]
  },
  "insolvency-bankruptcy": {
    title: "Insolvency and Bankruptcy Support",
    description:
      "Support for CIRP, liquidation and bankruptcy matters for value protection and compliance.",
    offerings: [
      "CIRP support including verification of claims and CoC coordination",
      "Liquidation process assistance and asset memorandum preparation",
      "Bankruptcy proceedings including repayment plans and distribution",
      "Filings before NCLT, DRT and IBBI",
      "Regulatory reports and disclosures"
    ]
  }
};

const PracticeAreaDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const area = slug ? practiceAreaDetails[slug] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const goBackToCard = () => {
    navigate("/", { state: { scrollToCard: slug } });
  };

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Practice Area Not Found</h1>
          <Button asChild><Link to="/">Return Home</Link></Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">

          <Button variant="ghost" className="mb-8 flex items-center" onClick={goBackToCard}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          <div className="mb-16">
            <h1 className="text-6xl font-serif font-bold mb-6">{area.title}</h1>
            <p className="text-xl text-muted-foreground max-w-4xl leading-relaxed">
              {area.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {area.offerings.map((offering, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border/50 bg-card shadow-elegant hover:shadow-premium transition-all duration-300 hover:-translate-y-1 flex items-start space-x-4"
              >
                <div className="p-2 rounded-full bg-primary/10">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <p className="text-lg text-foreground">{offering}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreaDetail;
