import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const DATA:any = {
  "mca-posh": {
    title: "MCA 2025 Annual Reporting, POSH & Maternity",
    headline: "POSH and maternity compliance move into board reporting",
    insight:
      "MCA mandates disclosure of complaints, disposal details and maternity compliance in board reports.",
    why:
      "This converts HR obligations into governance risk and investor disclosures.",
    author: "CS Muskaan Aggarwal (LLM, ACS)",
    date: "April 2025",
    readTime: "5 min read",
    category: "Corporate Compliance",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85"
  },
  "ibbi-pmla": {
    title: "IBBI Circular under PMLA",
    headline: "Asset recovery allowed under PMLA via Special Courts",
    insight:
      "IPs can restore attached assets into CIRP with standard undertakings.",
    why:
      "This improves creditor recoveries and reduces procedural friction.",
    author: "Maglaw Advisors",
    date: "April 2025",
    readTime: "4 min read",
    category: "Insolvency Law",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
  },
  "shops-law": {
    title: "Shops Registration Compliance",
    headline: "Nearly all offices legally require Shops Act registration",
    insight:
      "Coworking spaces and home offices are covered under Shops Acts.",
    why:
      "Non registration leads to penalties and banking problems.",
    author: "Maglaw Advisors",
    date: "April 2025",
    readTime: "4 min read",
    category: "Employment Law",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e"
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = DATA[id || ""];

  useEffect(() => window.scrollTo(0, 0), []);

  if (!post) return <div className="pt-32 text-center">Article not found</div>;

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">

          {/* BACK BUTTON */}
          <button
            onClick={() => navigate("/blogs")}
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition mb-10"
          >
            <ArrowLeft size={16} /> Back to Legal Insights
          </button>

          <article className="max-w-4xl mx-auto">

            <img src={post.image} className="rounded-xl mb-10 w-full h-[500px] object-cover" />

            <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
              <span className="flex items-center"><User className="mr-2 w-4 h-4" />{post.author}</span>
              <span className="flex items-center"><Calendar className="mr-2 w-4 h-4" />{post.date}</span>
              <span className="flex items-center"><Clock className="mr-2 w-4 h-4" />{post.readTime}</span>
              <span className="bg-primary/10 text-primary px-3 py-1 rounded">{post.category}</span>
            </div>

            <h1 className="text-5xl font-serif font-bold mb-10">{post.title}</h1>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-2">Headline</h2>
                <p className="text-muted-foreground text-lg">{post.headline}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">Insight</h2>
                <p className="text-muted-foreground text-lg">{post.insight}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">Why it matters</h2>
                <p className="text-muted-foreground text-lg">{post.why}</p>
              </div>
            </div>

            <div className="mt-20 bg-gradient-burgundy rounded-2xl p-12 text-center shadow-premium">
              <h3 className="text-3xl font-bold text-white">Need Expert Guidance</h3>
              <p className="text-white/90 mt-3">
                Get compliance clarity from Maglaw Advisors.
              </p>
              <a
                href="/#contact"
                className="inline-block mt-6 bg-white text-primary px-8 py-3 rounded shadow hover:scale-105 transition"
              >
                Schedule a Consultation
              </a>
            </div>

          </article>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
