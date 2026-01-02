import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can join this community?",
    answer: "Our community is open to all students, recent graduates, and early-career professionals who are passionate about career growth. Whether you're from engineering, arts, commerce, or any other field—everyone is welcome!",
  },
  {
    question: "Is it free to join?",
    answer: "Yes! Joining our community is completely free. We believe in making career guidance accessible to everyone. Some premium resources and mentorship programs may have associated costs, but the core community experience is always free.",
  },
  {
    question: "Which platform should I choose?",
    answer: "It depends on your preference! Telegram is great for quick updates and casual discussions. WhatsApp works well for focused, smaller groups. Discord offers the most features with voice channels, topic organization, and live sessions. Many members join all three!",
  },
  {
    question: "How can I ask questions?",
    answer: "Once you join any of our platforms (Telegram, WhatsApp, or Discord), you can simply post your questions in the designated channels. Our community members and mentors are always ready to help. For Discord, we have topic-specific channels for better organization.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-neon-cyan/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked
            <span className="gradient-text"> Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Got questions? We've got answers. If you can't find what you're looking for, ask in our community!
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card border-none rounded-2xl px-6 overflow-hidden hover:border-primary/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base sm:text-lg font-medium hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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

export default FAQSection;