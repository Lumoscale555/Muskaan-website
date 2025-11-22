const clients = [
  { name: "Tech Corp", logo: "TC" },
  { name: "Global Industries", logo: "GI" },
  { name: "Finance Plus", logo: "FP" },
  { name: "Real Estate Pro", logo: "REP" },
  { name: "Healthcare Systems", logo: "HS" },
  { name: "Education Hub", logo: "EH" },
];

const TrustedBy = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
            Trusted by Leading Organizations
          </h3>
          <p className="text-muted-foreground">
            Partnering with industry leaders across sectors
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-16 items-center justify-around">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 group"
              >
                <div className="w-24 h-24 bg-card rounded-xl shadow-elegant border border-border/50 flex items-center justify-center group-hover:shadow-premium transition-all duration-300 group-hover:scale-110 group-hover:border-primary/30">
                  <span className="text-2xl font-serif font-bold text-primary/60 group-hover:text-primary transition-colors">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
