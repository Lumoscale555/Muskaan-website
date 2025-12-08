import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";

const POSTS = [
  {
    id: "ibc-update",
    title: "IBC Update: NCLT Kochi Approves Resolution Plan Below Liquidation Value",
    excerpt: "Resolution approved for Samson and Sons Builders below liquidation value with wide implications.",
    image: "/thumbnails/IBBI.jpg",
    date: "Dec 2024",
    category: "Insolvency and Bankruptcy"
  },
  {
    id: "founder-glossary",
    title: "Essential Startup Glossary Every Founder Must Know",
    excerpt: "Daily startup terms covering funding, valuation, governance, and growth.",
    image: "/thumbnails/Startup.jpg",
    date: "2024",
    category: "Startup Ecosystem"
  },
  {
    id: "roc-penalty",
    title: "ROC Adjudication Order: MGT-7A Non Compliance",
    excerpt: "Penalty imposed on company and directors for failure in statutory board reporting.",
    image: "/thumbnails/MCA.png",
    date: "2024",
    category: "Company Law"
  },
  {
    id: "fema-2024",
    title: "Amendments Under FEMA 2024",
    excerpt: "Foreign exchange reforms on overseas listings, startup definitions, and investor operations.",
    image: "/thumbnails/Fema.jpg",
    date: "2024",
    category: "FEMA Updates"
  }
];

const BlogList = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-28 pb-24">
        <div className="container mx-auto px-4">

          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-1.5 rounded hover:bg-primary hover:text-white transition mb-8"
          >
            <ArrowLeft size={14} />
            Home
          </Link>

          <div className="text-center mb-12">
            <h1 className="text-5xl font-serif font-bold">
              Legal <span className="text-gradient-burgundy">Insights</span>
            </h1>
            <p className="text-muted-foreground mt-2">
              Curated articles from Maglaw Advisors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <article key={post.id} className="border rounded-lg flex flex-col bg-white hover:shadow-lg transition">
                <img src={post.image} className="h-48 object-cover rounded-t-lg w-full" />

                <div className="p-6 flex flex-col grow">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full w-fit">
                    {post.category}
                  </span>

                  <h2 className="font-bold text-lg mt-3">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mt-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex justify-between items-center border-t pt-3 text-sm">
                    <span className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>

                    <Link
                      to={`/blog/${post.id}`}
                      className="bg-primary text-white text-xs px-3 py-1 rounded hover:bg-primary/90"
                    >
                      Read
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
