import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const blogPosts = [
  {
    id: "mca-posh",
    title: "MCA’s 2025 Annual Report Rules, POSH and Maternity",
    excerpt: "Employee welfare is now statutory governance reporting.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Corporate Compliance"
  },
  {
    id: "ibbi-pmla",
    title: "IBBI Circular under PMLA",
    excerpt: "Special Courts enable asset return to CIRP estates.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Insolvency Law"
  },
  {
    id: "shops-law",
    title: "Shops & Establishment Compliance",
    excerpt: "Most offices legally require registration.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    date: "April 2025",
    category: "Employment Law"
  }
];

const Blogs = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section id="blogs" className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-serif font-bold">
            Legal <span className="text-gradient-burgundy">Insights</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Compliance intelligence from Maglaw Advisors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map(post => (
            <article
              key={post.id}
              className="border rounded-xl shadow-soft hover:shadow-premium transition flex flex-col h-full"
            >

              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover rounded-t-xl"
              />

              <div className="p-6 flex flex-col grow">

                <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs w-fit">
                  {post.category}
                </span>

                <h3 className="font-serif text-lg font-bold mt-3 mb-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <div className="mt-auto flex justify-between items-center">

                  <span className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>

                  <Link
                    to={`/blog/${post.id}`}
                    className="border border-primary px-4 py-1.5 rounded text-primary hover:bg-primary hover:text-white transition"
                  >
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
            className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition"
          >
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
