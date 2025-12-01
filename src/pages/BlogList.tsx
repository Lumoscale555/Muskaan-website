import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft } from "lucide-react";

const POSTS = [
  {
    id: "mca-posh",
    title: "MCA 2025 Annual Reporting, POSH & Maternity",
    excerpt: "POSH and maternity disclosures are now mandatory governance matters.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Corporate Compliance"
  },
  {
    id: "ibbi-pmla",
    title: "IBBI Circular under PMLA",
    excerpt: "Attached assets can be restored via Special Courts.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Insolvency Law"
  },
  {
    id: "shops-law",
    title: "Shops Registration Legal Duty",
    excerpt: "Most offices must register under state Shops laws.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Employment Law"
  }
];

const BlogList = () => {

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">

          {/* BACK TO HOME */}
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
              Analysis and compliance updates from Maglaw Advisors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map(post => (
              <article key={post.id} className="border rounded-xl shadow-soft hover:shadow-premium transition">

                <img src={post.image} className="h-56 object-cover rounded-t-xl w-full" />

                <div className="p-6">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {post.category}
                  </span>

                  <h2 className="font-serif font-bold text-lg mt-3 mb-2">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex justify-between items-center">
                    <span className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </span>

                    <Link
                      to={`/blog/${post.id}`}
                      className="border border-primary px-4 py-1.5 rounded text-primary hover:bg-primary hover:text-white transition"
                    >
                      Read →
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
