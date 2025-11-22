import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of legal services do you offer?",
    answer: "We provide comprehensive legal services across multiple practice areas including Corporate Law, Civil Law, Criminal Law, Family Law, Intellectual Property, Real Estate, Employment Law, International Law, and Alternative Dispute Resolution. Our experienced team handles everything from legal consultation to full representation in courts and tribunals."
  },
  {
    question: "How much do your legal services cost?",
    answer: "Our fees vary depending on the complexity of the case, practice area, and level of representation required. We offer transparent pricing with no hidden costs. During your initial consultation, we'll provide a detailed fee structure tailored to your specific needs. We also offer flexible payment plans for eligible clients."
  },
  {
    question: "How long does it take to resolve a legal case?",
    answer: "The timeline varies significantly based on case complexity, court schedules, and the nature of legal proceedings. Simple matters like contract reviews may take days, while complex litigation can extend to months or years. We provide realistic timelines during consultation and keep you informed throughout the process."
  },
  {
    question: "Do you offer initial consultations?",
    answer: "Yes, we offer comprehensive initial consultations where we assess your legal needs, explain potential strategies, and outline expected outcomes. This session allows us to understand your situation and for you to evaluate our services. Contact us to schedule your consultation at our Bangalore office."
  },
  {
    question: "Can you handle cases outside Bangalore?",
    answer: "While we're based in Bangalore, we have extensive experience handling cases across Karnataka and pan-India through our network of associate lawyers. For international matters, our International Law practice provides expert guidance on cross-border transactions and foreign legal issues."
  },
  {
    question: "What should I bring to my first meeting?",
    answer: "Please bring all relevant documents related to your case including contracts, correspondence, court notices, identification documents, and any previous legal opinions. The more information you provide, the better we can assess your situation and provide accurate advice."
  },
  {
    question: "How do you communicate case updates?",
    answer: "We maintain transparent communication through your preferred channels—email, phone, or in-person meetings. You'll receive regular updates on case progress, upcoming deadlines, and strategic decisions. We're committed to keeping you informed and involved throughout the legal process."
  },
  {
    question: "Do you handle emergency legal situations?",
    answer: "Yes, we understand that legal emergencies require immediate attention. For urgent matters such as arrests, injunctions, or time-sensitive legal issues, we offer expedited consultation services. Contact our office immediately, and we'll prioritize your case accordingly."
  }
];

const FAQ = () => {
  return (
    <section id="faqs" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-serif font-bold text-foreground mb-6">
            Frequently Asked <span className="text-gradient-burgundy">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our legal services, process, and how we can help you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-8 border border-border/50 shadow-elegant hover:shadow-premium transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-serif text-xl font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-lg pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
