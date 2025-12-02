import maglawLogo from "@/assets/mag-law-logo.jpg";

const AboutMaglaw = () => {
  return (
    <section
      id="about-page"
      className="py-24 bg-gradient-to-br from-burgundy/5 to-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 animate-fade-in-up max-w-[520px] text-left">

            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
              A Vision Born from <span className="text-gradient-burgundy">Passion</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              The inception of Maglaw Advisors was driven by a singular vision, to democratize access
              to exceptional legal services while maintaining the highest standards. Our core focus areas include
              business advisory, corporate structuring, and strategic planning.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              We are a team of 20+ dedicated professionals working towards supporting businesses and startups
              through every stage of growth. We partner with entrepreneurs, founders, and leadership teams to
              provide clear, actionable guidance tailored to their specific needs.
            </p>

            <div className="pt-6">
              <div className="inline-flex items-center p-6 bg-card rounded-xl shadow-elegant border border-border/50">
                <div>
                  <p className="font-serif font-bold text-xl text-foreground mb-1">
                    "Your success is our mission"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    CS Muskaan Aggarwal (LLM, ACS), Founder
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="relative animate-fade-in flex justify-center items-center">

            <div className="relative overflow-hidden rounded-2xl shadow-premium bg-white p-10">
              <img
                src={maglawLogo}
                alt="Maglaw Advisors Logo"
                className="w-72 h-auto object-contain mx-auto"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-premium border border-border/50">
              <div className="text-4xl font-serif font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Annual Client Retention Rate</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-card p-8 rounded-2xl shadow-premium border border-border/50">
              <div className="text-4xl font-serif font-bold text-primary mb-2">80%</div>
              <div className="text-sm text-muted-foreground">
                Clients With Ongoing Mandates
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMaglaw;
