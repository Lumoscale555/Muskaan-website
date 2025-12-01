import IMG1 from "../assets/IMG-20251129-WA0020.jpg";
import IMG2 from "../assets/IMG-20251129-WA0021.jpg";
import IMG3 from "../assets/IMG-20251129-WA0022.jpg";
import IMG4 from "../assets/IMG-20251129-WA0023.jpg";
import IMG5 from "../assets/IMG-20251129-WA0024.jpg";
import IMG6 from "../assets/IMG-20251129-WA0025.jpg";
import IMG7 from "../assets/IMG-20251129-WA0026.jpg";
import IMG8 from "../assets/IMG-20251129-WA0027.jpg";
import IMG9 from "../assets/IMG-20251129-WA0028.jpg";
import IMG10 from "../assets/IMG-20251129-WA0029.jpg";
import IMG11 from "../assets/IMG-20251129-WA0030.jpg";
import IMG12 from "../assets/IMG-20251129-WA0031.jpg";
import IMG13 from "../assets/IMG-20251129-WA0032.jpg";
import IMG14 from "../assets/IMG-20251129-WA0033.jpg";
import IMG15 from "../assets/IMG-20251129-WA0034.jpg";
import IMG16 from "../assets/IMG-20251129-WA0035.jpg";
import IMG17 from "../assets/IMG-20251129-WA0036.jpg";
import IMG18 from "../assets/IMG-20251129-WA0037.jpg";
import IMG19 from "../assets/IMG-20251129-WA0038.jpg";
import IMG20 from "../assets/IMG-20251129-WA0039.jpg";
import IMG21 from "../assets/IMG-20251129-WA0040.jpg";
import IMG22 from "../assets/IMG-20251129-WA0041.jpg";
import IMG23 from "../assets/IMG-20251129-WA0042.jpg";
import IMG24 from "../assets/IMG-20251129-WA0043.jpg";

const clients = [
  IMG1, IMG2, IMG3, IMG4, IMG5, IMG6,
  IMG7, IMG8, IMG9, IMG10, IMG11, IMG12,
  IMG13, IMG14, IMG15, IMG16, IMG17, IMG18,
  IMG19, IMG20, IMG21, IMG22, IMG23, IMG24
];

const TrustedBy = () => {
  return (
    <section className="py-20 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h3 className="text-3xl font-serif font-bold mb-2">
            Trusted by Our Clients
          </h3>
          <p className="text-muted-foreground">
            Recognized by startups, enterprises, and institutions
          </p>
        </div>

        {/* Scrolling Row */}
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-16 animate-scroll">

            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-28 rounded-xl overflow-hidden shadow-soft bg-white flex items-center justify-center hover:shadow-premium transition"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}

          </div>
        </div>

      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 35s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
