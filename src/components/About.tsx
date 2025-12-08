import maglawLogo from "@/assets/mag-law-logo.jpg";

const AboutMaglaw = () => {
  return (
    <section id="about-page" className="py-24 bg-white relative">

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 animate-fade-in-up">

            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
              A Vision Born from <span className="text-gradient-burgundy">Passion</span>
            </h2>

            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              The inception of Maglaw Advisors was driven by a singular vision: to democratize access
              to exceptional legal services while maintaining the highest standards. Our core focus areas include
              business advisory, corporate structuring, and strategic planning.
            </p>

            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              We are a team of 20+ dedicated professionals working towards supporting businesses and startups
              through every stage of growth. We partner with entrepreneurs, founders, and leadership teams to
              provide clear, actionable guidance tailored to their specific needs.
            </p>

            <div className="pt-6">
              <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-xl shadow-elegant border border-border/50">
                <div className="text-4xl">🏛️</div>
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
