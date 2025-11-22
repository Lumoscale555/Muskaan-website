import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <Button asChild variant="ghost" className="mb-8 animate-fade-in">
            <Link to="/blogs" className="flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          <article className="max-w-4xl mx-auto animate-fade-in-up">
            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-premium">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
                alt="Article"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>Muskaan Advocate</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>5 min read</span>
              </div>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Corporate Law
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-8">
              Understanding Corporate Compliance in 2025
            </h1>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                The landscape of corporate compliance is evolving rapidly, with new regulations and enforcement mechanisms reshaping how businesses operate. In this comprehensive guide, we explore the key compliance requirements that every modern corporation must address.
              </p>

              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-12">
                The Changing Regulatory Environment
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Corporate India is witnessing unprecedented regulatory scrutiny across sectors. From the Companies Act amendments to new environmental regulations, businesses must stay vigilant and proactive in their compliance approach.
              </p>

              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-12">
                Key Compliance Areas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern corporate compliance extends beyond traditional governance. It encompasses data privacy, environmental sustainability, labor laws, and international trade regulations. Each area requires specialized attention and strategic planning.
              </p>

              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-12">
                Building a Compliance Framework
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A robust compliance framework begins with risk assessment, followed by policy development, training programs, and continuous monitoring. Regular audits and updates ensure your organization stays ahead of regulatory changes.
              </p>

              <div className="bg-primary/10 rounded-2xl p-8 my-12 border-l-4 border-primary">
                <p className="text-lg text-foreground italic">
                  "Proactive compliance is not just about avoiding penalties—it's about building trust with stakeholders and creating sustainable business practices that stand the test of time."
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  - Muskaan Advocate, Founder, MAG.LAW
                </p>
              </div>

              <h2 className="text-3xl font-serif font-bold text-foreground mb-4 mt-12">
                Conclusion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Navigating corporate compliance in 2025 requires a comprehensive approach that combines legal expertise, business acumen, and technological solutions. Partner with experienced legal professionals to ensure your compliance strategy is both effective and efficient.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-burgundy text-primary-foreground rounded-2xl p-12 text-center shadow-premium">
              <h3 className="text-3xl font-serif font-bold mb-4">
                Need Expert Legal Guidance?
              </h3>
              <p className="text-xl mb-8 text-primary-foreground/90">
                Our corporate law team is ready to help you navigate compliance challenges.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/#contact">Schedule a Consultation</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
