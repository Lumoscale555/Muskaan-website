import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { useEffect } from "react";

const blogPosts = [
  {
    id: "ibbi-update",
    title: "IBBI Update, Resolution Plans Approved in 2024",
    excerpt: "Five insolvency resolutions across major industries with recovery statistics.",
    image: "/thumbnails/IBBI.jpg",
    date: "2025",
    category: "Insolvency and Bankruptcy Law"
  },
  {
    id: "sebi-2024",
    title: "Major Changes Under SEBI Regulations During 2024",
    excerpt: "PIT and LODR amendments affecting governance and disclosures.",
    image: "/thumbnails/SEBI.png",
    date: "2025",
    category: "SEBI Updates"
  },
  {
    id: "founder-glossary",
    title: "A Must Have Glossary for Every Founder",
    excerpt: "Startup terms explained in simple language for founders.",
    image: "/thumbnails/Startup.jpg",
    date: "2025",
    category: "Startup and Business Law"
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
            <article key={post.id} className="border rounded-xl shadow-soft hover:shadow-premium transition flex flex-col">
              <img src={post.image} className="w-full h-52 object-cover rounded-t-xl" />
              <div className="p-6 flex flex-col grow">
                <span className="text-primary bg-primary/10 px-3 py-1 rounded-full text-xs w-fit">{post.category}</span>
                <h3 className="font-serif text-lg font-bold mt-3">{post.title}</h3>
                <p className="text-muted-foreground mt-2 mb-4">{post.excerpt}</p>
                <div className="mt-auto flex justify-between text-sm">
                  <span className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </span>
                  <Link to={`/blog/${post.id}`} className="text-primary hover:underline">Read</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blogs" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition">
            View All Articles
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Blogs;
