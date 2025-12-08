import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const blogPosts = [
  {
    id: "ibc-update",
    title: "IBC Update: NCLT Kochi Approves Resolution Plan Below Liquidation Value",
    excerpt: "NCLT Kochi approves resolution plan below liquidation value in Samson and Sons Builders insolvency.",
    image: "/thumbnails/IBBI.jpg",
    date: "Dec 2024",
    category: "Insolvency and Bankruptcy"
  },
  {
    id: "founder-glossary",
    title: "Essential Startup Glossary Every Founder Must Know",
    excerpt: "Founders’ Term of the Day series explaining critical startup concepts in simple language.",
    image: "/thumbnails/Startup.jpg",
    date: "2024",
    category: "Startup Ecosystem"
  },
  {
    id: "roc-penalty",
    title: "ROC Penalty for Non Reporting of Board Meetings in MGT-7A",
    excerpt: "Company and directors fined over ₹2 lakh for MGT-7A disclosure failure.",
    image: "/thumbnails/MCA.png",
    date: "2024",
    category: "Company Law"
  },
  {
    id: "fema-2024",
    title: "FEMA Amendments 2024",
    excerpt: "Foreign exchange reforms impacting startups, investors, and overseas listings.",
    image: "/thumbnails/Fema.jpg",
    date: "2024",
    category: "FEMA Updates"
  }
];

const Blogs = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section id="blogs" className="py-24 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
            Legal <span className="text-gradient-burgundy">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Latest regulatory intelligence from Maglaw Advisors
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="border rounded-lg hover:shadow-lg transition flex flex-col bg-white overflow-hidden"
            >
              <img
                src={post.image}
                className="h-40 w-full object-cover"
                alt={post.title}
              />

              <div className="p-4 flex flex-col grow">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full w-fit mb-2">
                  {post.category}
                </span>

                <h3 className="font-semibold text-sm leading-snug mb-1">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-xs mb-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex justify-between items-center text-xs">
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                    Read
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blogs"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition font-medium"
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
