import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Crypto Business Setup and Advertising Compliance",
    category: "Business Laws",
    problem:
      "A crypto focused marketing startup wanted to set up operations in India and promote virtual digital assets without breaching evolving regulations or violating ASCI guidelines on crypto advertising.",
    outcome:
      "Structured their business model and marketing workflows to ensure full compliance with Advertising Standards Council of India guidelines for virtual digital assets and NFT advertisements, enabling the company to run campaigns legally and operate securely in the Indian market."
  },
  {
    title: "Employment Law Dispute and Reputation Protection",
    category: "Employment Laws",
    problem:
      "The company faced allegations of forgery, confidential data misuse, privacy breaches, social media misuse, online defamation by former employees and potential violations of employment agreements, creating legal and reputational risk.",
    outcome:
      "Provided end to end legal support by assessing evidence, issuing structured legal notices, handling negotiations and securing compliance, which protected the company reputation and resolved the matter without prolonged litigation."
  },
  {
    title: "Non Compete and Non Solicitation Contract Redesign",
    category: "Law of Contracts",
    problem:
      "The existing non compete clause was overbroad in duration, geography and scope, placing it at risk of being void under constitutional and contractual law while failing to properly protect the company’s AI driven business model.",
    outcome:
      "Redesigned the provisions by narrowing definitions, removing territorial excess, refining non solicitation terms and balancing enforceability and fairness to protect commercial interests while reducing litigation risk."
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
            Proven <span className="text-gradient-burgundy">Case Outcomes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical legal strategies with measurable results across business, employment and contract law matters.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-border/50 group animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
                {study.category}
              </div>

              <h3 className="text-2xl font-serif font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {study.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="p-1 bg-destructive/10 rounded-full mt-1">
                      <div className="w-2 h-2 bg-destructive rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.problem}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">The Result</h4>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
