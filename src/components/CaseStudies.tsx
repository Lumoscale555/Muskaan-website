import { CheckCircle2 } from "lucide-react";

const caseStudies = [
  {
    title: "Corporate Merger Success",
    problem: "A mid-sized technology company faced complex regulatory challenges during a merger with an international firm, risking deal failure and significant financial loss.",
    outcome: "Successfully navigated regulatory approvals, structured the deal to optimize tax benefits, and completed the merger 2 months ahead of schedule, saving the client ₹50 crores.",
    category: "Corporate Law"
  },
  {
    title: "Family Estate Resolution",
    problem: "Multi-generational property dispute involving 12 family members, 5 properties, and contested wills spanning 3 decades of legal complications.",
    outcome: "Achieved amicable settlement through mediation, preserved family relationships, and ensured fair distribution of assets worth ₹30 crores within 6 months.",
    category: "Family Law"
  },
  {
    title: "Criminal Defense Victory",
    problem: "Client faced serious criminal charges with substantial evidence against them, risking 10+ years imprisonment and career destruction.",
    outcome: "Identified critical procedural violations and evidence inconsistencies, resulting in complete acquittal and restoration of client's reputation.",
    category: "Criminal Law"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
            Proven <span className="text-gradient-burgundy">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real results, real impact. Explore how we've helped clients overcome complex legal challenges and achieve their objectives.
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
