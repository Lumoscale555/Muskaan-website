const FounderStory = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-burgundy/5 to-background relative overflow-hidden">

      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              The Journey
            </div>

            <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
              A Vision Born from <span className="text-gradient-burgundy">Passion</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              The inception of MAG.LAW was driven by a singular vision: to democratize access to exceptional legal services while maintaining the highest standards.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Muskaan's journey in law started with a profound belief that justice should be accessible, transparent, and effective.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, MAG.LAW stands with over 500 successful cases and a passionate team.
            </p>

            <div className="pt-6">
              <div className="inline-flex items-center space-x-4 p-6 bg-card rounded-xl shadow-elegant border border-border/50">
                <div className="text-4xl">✨</div>
                <div>
                  <p className="font-serif font-bold text-xl text-foreground mb-1">
                    "Your success is our mission"
                  </p>
                  <p className="text-sm text-muted-foreground">
                    - Muskaan, Founder
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative overflow-hidden rounded-2xl shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Muskaan - Founder"
                className="w-full h-[700px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-burgundy/30 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-8 bg-card p-8 rounded-2xl shadow-premium border border-border/50 animate-fade-in">
              <div className="text-4xl font-serif font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>

            <div className="absolute -top-8 -right-8 bg-card p-8 rounded-2xl shadow-premium border border-border/50 animate-fade-in">
              <div className="text-4xl font-serif font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Cases Won</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
