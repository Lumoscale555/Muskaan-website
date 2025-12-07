import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

type Section = { title: string; body: string };

const DATA: Record<string, any> = {

"ibbi-update": {
title: "IBBI Update, Resolution Plans Approved in 2024",
author: "Team Maglaw",
date: "2025",
readTime: "12 min read",
category: "Insolvency and Bankruptcy Law",
intro: "2024 witnessed some of the most striking insolvency outcomes under the IBC. Across real estate, energy, manufacturing, pharmaceuticals and automobiles, NCLT benches approved resolution plans reaffirming one constant principle, commercial wisdom of the Committee of Creditors remains supreme.",
sections: [
{
title: "Samson and Sons Builders and Developers Private Limited",
body: `
Case Snapshot
Admission: 03 November 2022  
Approval: 20 December 2024  
Bench: Kochi NCLT  
Industry: Real Estate  
CIRP Duration: 1143 days  

Financial Position
Total Claims: INR 192.58 crore  
Resolution Amount: INR 0.29 crore  
Realisation: 0.16 percent  
Asset Size: INR 642.47 lakh  

Distribution Under the Plan
Secured creditors received INR 25 lakh against claims of INR 43.78 crore.  
Deposit holders recovered INR 1.27 lakh against INR 4.95 crore.  
Statutory authorities received INR 3.36 lakh against INR 1.45 crore.  
Operational creditors received INR 35,900 against INR 4.58 crore.  
Homebuyers were granted registration of completed units.

Judicial Observations
Project wise resolution under Regulation 39M was exercised.  
Liquidation value disclosure was held non mandatory.  
Reliance placed on Novu Experties vs VLRC.  
Homebuyers cannot be forced into liquidation without ownership transfer.
`
},
{
title: "Triumvirate Sorority Private Limited",
body: `
Case Snapshot
Approval: 27 November 2024  
Bench: Mumbai NCLT  
Industry: Power Generation  

Financials
Claims: INR 632.67 crore  
Resolution Amount: INR 5.60 crore  
Realisation: 0.88 percent  

Valuation
Fair Value: INR 10.16 crore  
Liquidation Value: INR 7.38 crore  

Judicial Position
Resolution value need not exceed liquidation value.  
Commercial wisdom of CoC upheld by Supreme Court and NCLAT Chennai.
`
},
{
title: "Kanel Industries Limited",
body: `
Case Snapshot
Bench: Ahmedabad NCLT  
Industry: Edible Oil Manufacturing  
CIRP Duration: 1055 days  

Claims and Outcome
Claim: INR 57.35 crore  
Resolution: INR 16.45 crore  
Realisation: 60.94 percent  

Structure
INR 14.96 crore converted into equity.  
Unsecured lenders received INR 1.49 crore.

Valuation
Liquidation Value: INR 11.90 crore  
Fair Value: INR 16.99 crore
`
},
{
title: "Saffron Therapeutics Private Limited",
body: `
Case Snapshot
Bench: Ahmedabad NCLT  
Industry: Pharmaceuticals  
Claim: INR 14.67 crore  
Resolution: INR 1.4 crore  

Payment Structure
INR 75.14 lakh paid upfront.  
Remaining through optionally convertible debentures.  
Statutory dues settled at ten percent.

Legal Position
Promoter allowed as resolution applicant under MSME carve out.  
No guarantee relief granted.  
Separate merger approval required.
`
},
{
title: "PAE Limited",
body: `
Case Snapshot
Bench: Mumbai NCLT  
Industry: Automobile  

Financials
Claim: INR 26.79 crore  
Resolution: INR 5.5 crore  

Distribution
Secured creditors paid in full.  
Unsecured creditors paid in full.  
Operational creditors recovered approximately 4.5 percent.

Ownership
Public shareholders issued equity.  
Resolution applicant holds 95 percent stake.
`
}
]
},

"sebi-2024": {
title: "Major Changes Under SEBI Regulations During 2024",
author: "Team Maglaw",
date: "2025",
readTime: "7 min read",
category: "SEBI Updates",
intro: "SEBI’s 2024 regulatory reforms decisively strengthened India's compliance and disclosure architecture. Insider trading, governance and reporting were tightened significantly.",
sections: [
{
title: "SEBI PIT Amendment Regulations, 2024",
body: `
Scope Expansion
The definition of connected persons widened.  
Relatives category expanded substantially.  
Entities associated with insiders included.

Impact
Compliance frameworks must map indirect ties.  
Trading restrictions apply more broadly.
`
},
{
title: "SEBI LODR Amendment Regulations, 2024",
body: `
Governance Reform
Board vacancies must be filled within three months.  
Mandatory quarterly grievance reporting.

Disclosure Enhancements
Materiality thresholds revised.  
Mandatory website disclosures introduced.

Audit Oversight
Peer review of auditors mandated.  
Restriction on rendering non audit services.

Market Implication
Promoter reclassification timelines tightened.`
}
]
},

"founder-glossary": {
title: "A Must Have Glossary for Every Founder",
author: "Maglaw Advisors",
date: "2024",
readTime: "15 min read",
category: "Startup Ecosystem",
intro: "From fundraising mechanics to equity structures and investor rights, this glossary explains the most critical startup terms in simple language. It helps founders understand the language investors speak, the clauses that shape ownership, and the concepts that control valuation and growth.",
sections: [

{
title: "Cap Table",
body: `
A Cap Table shows who owns how much of your startup.

It lists founders, investors, employees and the type of securities held such as common shares, preferred shares, options and warrants.

Your cap table is the story of your company’s ownership.
`
},

{
title: "Bootstrapping",
body: `
Bootstrapping means building a startup with your own money.

This includes personal savings, revenue and business cash flow instead of investor funding.
`
},

{
title: "Co Founder",
body: `
A Co Founder joins at zero.

Before funding.
Before traction.
Before certainty.

They build alongside you and share the risk, responsibility and vision.
`
},

{
title: "Runway",
body: `
Runway shows how long your business can operate before cash runs out.

Formula:
Runway = Current Cash ÷ Monthly Burn Rate
`
},

{
title: "Bridge Financing",
body: `
A short term loan used to cover expenses until long term funding arrives.

Common during:
Startup scaling
Acquisitions
Real estate deals
`
},

{
title: "Venture Capital",
body: `
Venture Capital is money invested into high growth startups in exchange for equity.

Beyond capital, investors bring network, mentorship and strategic direction.
`
},

{
title: "Minimum Viable Product (MVP)",
body: `
The simplest version of a product built to test an idea.

It helps attract early users, validate demand and collect real feedback without wasting resources.
`
},

{
title: "Product Market Fit",
body: `
When customers truly want and use your product.

It is not about building more features.
It is about solving real problems.
`
},

{
title: "Data Room",
body: `
A secure digital space where startups store important documents such as:

Incorporation papers  
Cap tables  
Financial statements  
Contracts  
IP filings  

Investors evaluate your company through your data room.
`
},

{
title: "Pro Rata Rights",
body: `
Allows investors to maintain their ownership percentage in future funding rounds.

Protects them from dilution.
`
},

{
title: "Cliff Period",
body: `
The minimum working period before stock options start vesting.

Common example:
1 year cliff in a 4 year vesting cycle.

Leave early and you receive nothing.
`
},

{
title: "Down Round",
body: `
When funding is raised at a lower valuation than before.

It signals pressure, risk or past overvaluation.
`
},

{
title: "Liquidation Waterfall",
body: `
Defines who gets paid first during an exit.

Typically:
Investors
Founders
Employees

Understanding it shows your real exit value.
`
},

{
title: "Pay to Play",
body: `
Investors must participate in future rounds to retain rights.

If they do not, they lose protections such as anti dilution.
`
},

{
title: "MFN Clause",
body: `
Most Favoured Nation clause ensures early investors receive better terms if later investors get improved deals.

Common in SAFE agreements.
`
},

{
title: "ESOP Buyback",
body: `
When a company buys back vested employee equity.

Usually happens during funding or exit events.
`
},

{
title: "Dual Class Shares",
body: `
Different voting power for different shareholders.

Often used by founders to maintain control after fundraising or IPO.
`
},

{
title: "Phantom Equity",
body: `
Employees receive financial upside without actual shares.

Rewards are tied to valuation or profits.
`
},

{
title: "Flip Structure",
body: `
Indian startup creates a foreign holding company.

Usually in the US or Singapore for international fundraising.
`
},

{
title: "Burn Rate",
body: `
Amount of money spent monthly.

Determines how long your runway lasts.
`
},

{
title: "Deep Tech",
body: `
Advanced technology startups in areas like:

Artificial intelligence  
Quantum computing  
Biotech  

These require talent and patient capital.
`
},

{
title: "Camel Startups",
body: `
Built for long term survival, not just growth.

Focus on profitability, efficiency and resilience.
`
},

{
title: "Corporate Accelerator",
body: `
Large companies helping startups with:

Funding  
Customers  
Mentorship  
Resources
`
},

{
title: "Venture Builders",
body: `
Startup factories.

Companies build ventures internally with capital and teams.
`
},

{
title: "Innovation System",
body: `
The complete ecosystem supporting startups.

Includes:
Universities  
Investors  
Policies  
Talent
`
},

{
title: "Open Innovation",
body: `
Creating innovation outside company boundaries.

Founders work with startups, researchers and even competitors.
`
},

{
title: "Entrepreneur in Residence (EIR)",
body: `
Experienced founders building companies inside funds or corporates.

They test, refine and launch ideas with support.
`
},

{
title: "Soft Landing",
body: `
Programs that help international expansion.

Includes visas, workspace and local market access.
`
},

{
title: "Venture Client Model",
body: `
Corporates become customers, not investors.

Revenue replaces dilution.
`
}

]
},

"fema-2024": {
title: "Amendments Under FEMA During 2024",
author: "Team Maglaw",
date: "2025",
readTime: "8 min read",
category: " Foreign Exchange Law (FEMA) Updates",
intro: "India realigned its foreign exchange regulations in 2024 to make global capital flows smoother, safer and more startup friendly.",
sections: [
{
title: "Mode of Payment and Reporting of Non Debt Instruments",
body: `
Shares on international exchanges permitted.  
Enhanced reporting obligations introduced.  
Repatriation simplified.
`
},
{
title: "Foreign Currency Accounts",
body: `
Linkage with overseas listings enabled.  
Regulatory clarity provided.
`
},
{
title: "Deposit Regulations",
body: `
Margin accounts permitted.  
Transactions allowed in foreign currency.
`
},
{
title: "Startup Redefinition",
body: `
Aligned with DPIIT definition.  
Reduced compliance ambiguity.
`
}
]
}

};

const BlogDetail = () => {
  const { id } = useParams();
  const post = DATA[id || ""];

  useEffect(() => window.scrollTo(0, 0), []);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-24 text-center">
          <h1 className="text-xl font-semibold mb-4">Article not found</h1>
          <Link
            to="/blogs"
            className="inline-block border border-primary px-6 py-2 rounded text-primary hover:bg-primary hover:text-white transition"
          >
            Back to Legal Insights
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">

          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition mb-8"
          >
            <ArrowLeft size={16} />
            Back to Legal Insights
          </Link>

          <article className="bg-white rounded-xl shadow-lg p-10">

            <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
              {post.category}
            </span>

            <h1 className="text-4xl font-serif font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-5 text-muted-foreground text-sm mb-8 border-b pb-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" /> {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" /> {post.readTime}
              </span>
            </div>

            {post.intro && (
              <div className="bg-muted p-6 rounded-md mb-10 text-lg">
                {post.intro}
              </div>
            )}

            <div className="space-y-12">
              {post.sections.map((section: Section, index: number) => (
                <section key={index}>
                  <h2 className="text-xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>
                  <div className="whitespace-pre-line leading-relaxed text-muted-foreground">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
