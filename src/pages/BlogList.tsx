import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";

const POSTS = [
  {
    id: "ibbi-update",
    title: "IBBI Update, Resolution Plans Approved in 2024",
    excerpt: "Five major NCLT resolutions across industries.",
    image: "/thumbnails/IBBI.jpg",
    date: "2025",
    category: "Insolvency and Bankruptcy Law"
  },
  {
    id: "sebi-2024",
    title: "Major Changes Under SEBI Regulations During 2024",
    excerpt: "Governance, disclosures and enforcement reforms.",
    image: "/thumbnails/SEBI.png",
    date: "2025",
    category: "SEBI Updates"
  },
  {
    id: "founder-glossary",
    title: "A Must Have Glossary for Every Founder",
    excerpt: "Startup terms founders must understand.",
    image: "/thumbnails/Startup.jpg",
    date: "2025",
    category: "Startup and Business Law"
  },
  {
    id: "fema-2024",
    title: "Amendments Under FEMA During 2024",
    excerpt: "Foreign investment and cross-border reforms.",
    image: "/thumbnails/Fema.jpg",
    date: "2025",
    category: "FEMA Updates"
  },
  {
    id: "roc-2024",
    title: "ROC Adjudication Orders and Penalties 2024",
    excerpt: "Penalties on companies and directors.",
    image: "/thumbnails/MCA.png",
    date: "2025",
    category: "Company law amendments"
  },
  {
    id: "companies-amendments",
    title: "Companies Act Amendments 2024",
    excerpt: "All corporate law amendments in one place.",
    image: "/thumbnails/MCA.png",
    date: "2025",
    category: "ROC compliance"
  }
];

const BlogList = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">

          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-2 rounded-md hover:bg-primary hover:text-white transition mb-10"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-6xl font-serif font-bold">
              Legal <span className="text-gradient-burgundy">Insights</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Analysis and updates from Maglaw Advisors
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <article
                key={post.id}
                className="relative border rounded-xl shadow-soft hover:shadow-premium transition flex flex-col bg-white"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-56 object-cover rounded-t-xl w-full"
                />

                <div className="p-6 flex flex-col grow pb-16">

                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit">
                    {post.category}
                  </span>

                  <h2 className="font-serif font-bold text-lg mt-3">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mt-2 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* FIXED FOOTER */}
                  <div className="absolute left-6 right-6 bottom-5 border-t pt-4 flex justify-between items-center">

                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>

                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-primary text-white text-sm px-4 py-1.5 rounded-md hover:bg-primary/90 transition"
                    >
                      Read Article
                    </Link>

                  </div>

                </div>
              </article>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
