import { CheckCircle2 } from "lucide-react";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-6">
            Proven <span className="text-gradient-burgundy">Case Outcomes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Practical legal strategies with measurable results across business, employment and contract law matters.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* 1, Crypto */}
          <div className="bg-card rounded-2xl p-10 border border-border/40 shadow-soft">
            <span className="inline-block mb-6 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
              Business Laws
            </span>

            <h3 className="text-2xl font-serif font-bold mb-8 leading-snug">
              Crypto Business Setup and<br className="hidden xl:block" /> Advertising Compliance
            </h3>

            {/* Challenge */}
            <div className="flex gap-4 mb-10 items-start">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-destructive" />
              </div>

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">
                  A crypto focused marketing startup wanted to set up operations in India and promote virtual digital
                  assets{" "}
                  <br className="hidden md:block" />
                  without breaching evolving regulations or violating ASCI guidelines on crypto advertising.
                </p>
              </div>
            </div>

            <hr className="mb-8 border-border" />

            {/* Result */}
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Result</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Structured their business model and marketing workflows to ensure full compliance with Advertising
                  Standards Council of India guidelines for virtual digital assets and NFT advertisements,{" "}
                  <br className="hidden md:block" />
                  enabling the company to run campaigns legally and operate securely in the Indian market.
                </p>
              </div>
            </div>
          </div>

          {/* 2, Employment */}
          <div className="bg-card rounded-2xl p-10 border border-border/40 shadow-soft">
            <span className="inline-block mb-6 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
              Employment Laws
            </span>

            <h3 className="text-2xl font-serif font-bold mb-8 leading-snug">
              Employment Law Dispute and<br className="hidden xl:block" /> Reputation Protection
            </h3>

            {/* Challenge */}
            <div className="flex gap-4 mb-10 items-start">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-destructive" />
              </div>

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The company faced allegations of forgery, confidential data misuse, privacy breaches and social media
                  misuse,{" "}
                  <br className="hidden md:block" />
                  including online defamation by former employees and potential violations of employment agreements,
                  creating legal and reputational risk.
                </p>
              </div>
            </div>

            <hr className="mb-8 border-border" />

            {/* Result */}
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Result</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Provided end to end legal support by assessing evidence, issuing structured legal notices and handling
                  negotiations,{" "}
                  <br className="hidden md:block" />
                  while securing compliance and protecting the company reputation, which resolved the matter without
                  prolonged litigation.
                </p>
              </div>
            </div>
          </div>

          {/* 3, Non compete */}
          <div className="bg-card rounded-2xl p-10 border border-border/40 shadow-soft">
            <span className="inline-block mb-6 px-4 py-1.5 text-sm rounded-full bg-primary/10 text-primary">
              Law of Contracts
            </span>

            <h3 className="text-2xl font-serif font-bold mb-8 leading-snug">
              Non Compete and Non Solicitation<br className="hidden xl:block" /> Contract Redesign
            </h3>

            {/* Challenge */}
            <div className="flex gap-4 mb-10 items-start">
              <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-destructive" />
              </div>

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Challenge</h4>
                <p className="text-muted-foreground leading-relaxed">
                  The existing non compete clause was overbroad in duration, geography and scope, placing it at risk of
                  being void under constitutional and contractual law,{" "}
                  <br className="hidden md:block" />
                  while failing to properly protect the company AI driven business model.
                </p>
              </div>
            </div>

            <hr className="mb-8 border-border" />

            {/* Result */}
            <div className="flex gap-4 items-start">
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 shrink-0" />

              <div className="max-w-[520px]">
                <h4 className="font-semibold mb-2">The Result</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Redesigned the provisions by narrowing definitions, removing territorial excess and refining non
                  solicitation terms,{" "}
                  <br className="hidden md:block" />
                  balancing enforceability and fairness to protect commercial interests while reducing litigation risk.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;
