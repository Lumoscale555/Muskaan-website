import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Compliance in 2025",
    excerpt: "Navigate the evolving landscape of corporate compliance with expert insights into new regulations and best practices.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    date: "March 15, 2025",
    category: "Corporate Law"
  },
  {
    id: 2,
    title: "Family Law Updates: Recent Judicial Precedents",
    excerpt: "Explore landmark judgments that are shaping family law practice and how they impact divorce and custody proceedings.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80",
    date: "March 10, 2025",
    category: "Family Law"
  },
  {
    id: 3,
    title: "Intellectual Property Rights in the Digital Age",
    excerpt: "Protecting your innovations and creative works requires strategic legal planning.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    date: "March 5, 2025",
    category: "IP Law"
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py 24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
            Legal <span className="text-gradient-burgundy">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with expert analysis, legal updates, and thought leadership from our experienced attorneys.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-premium transition-all duration-700 hover:-translate-y-2 border border-border/50 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <Button
                  asChild
                  variant="ghost"
                  className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto font-medium group/button"
                >
                  <Link to={`/blog/${post.id}`} className="flex items-center">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/button:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "500ms" }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
          >
            <Link to="/blogs">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
