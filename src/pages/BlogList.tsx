import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Corporate Compliance in 2025",
    excerpt: "Navigate the evolving landscape of corporate compliance with expert insights into new regulations, best practices, and strategic approaches to ensure your business stays ahead of regulatory requirements.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80",
    date: "March 15, 2025",
    category: "Corporate Law",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Family Law Updates: Recent Judicial Precedents",
    excerpt: "Explore landmark judgments that are reshaping family law practice in India. Learn how these precedents impact divorce proceedings, child custody arrangements, and property settlements.",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80",
    date: "March 10, 2025",
    category: "Family Law",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Intellectual Property Rights in the Digital Age",
    excerpt: "Protecting your innovations and creative works in an increasingly digital world requires strategic legal planning. Discover how to safeguard your IP assets effectively.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
    date: "March 5, 2025",
    category: "IP Law",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Real Estate Regulations: RERA Implementation Guide",
    excerpt: "A comprehensive guide to understanding RERA compliance requirements, buyer protections, and how the regulation is transforming the real estate sector in India.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    date: "February 28, 2025",
    category: "Real Estate Law",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "Employment Law: Navigating Workplace Changes",
    excerpt: "Understanding your rights and obligations in the modern workplace. Essential insights for both employers and employees on recent employment law developments.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80",
    date: "February 20, 2025",
    category: "Employment Law",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Criminal Defense Strategies: A Practical Guide",
    excerpt: "Learn about effective defense strategies, your constitutional rights, and what to expect during criminal proceedings. Expert insights from experienced defense attorneys.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80",
    date: "February 15, 2025",
    category: "Criminal Law",
    readTime: "9 min read"
  }
];

const BlogList = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-6xl font-serif font-bold text-foreground mb-6">
              Legal <span className="text-gradient-burgundy">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert analysis, legal updates, and thought leadership from our experienced team of attorneys.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-premium transition-all duration-500 hover:-translate-y-2 border border-border/50 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
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
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

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
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/button:translate-x-1" />
                    </Link>
                  </Button>
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
