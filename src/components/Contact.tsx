import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      window.open("/thankyou", "_blank");
      setLoading(false);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-burgundy/5 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif font-bold mb-4 text-foreground">
            Get in <span className="text-gradient-burgundy">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today and our legal team will assist you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-stretch">

          <div className="h-full">
            <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name *</label>
                  <Input name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Email Address *</label>
                  <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Phone Number</label>
                  <Input name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 81056 26011" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Legal Consultation" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Message *</label>
                <Textarea name="message" value={formData.message} onChange={handleChange} required className="min-h-[120px] resize-none" placeholder="Tell us about your legal needs" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-primary/90 flex items-center justify-center">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Send Message"}
              </Button>

            </form>
          </div>

          <div className="h-full flex flex-col justify-between space-y-6 overflow-hidden">

            <div className="bg-card p-6 rounded-2xl shadow border border-border/50">
              <h3 className="text-xl font-serif font-bold mb-4">Contact Information</h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm leading-none">+91 81056 26011</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm leading-none">team@maglaw.in</p>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow border border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold mb-1">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">Monday to Friday: 9 AM to 6 PM</p>
                  <p className="text-muted-foreground text-sm">Saturday: Closed</p>
                  <p className="text-muted-foreground text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-20 rounded-2xl overflow-hidden shadow border border-border/50 w-full h-[450px]">
          <iframe
            src="https://www.google.com/maps?q=34%20T%2C%20First%20Floor%2C%2011th%20Main%20Road%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Office Location"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;
