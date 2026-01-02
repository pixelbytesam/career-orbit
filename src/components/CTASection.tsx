import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Gamepad2, ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/15 via-background to-neon-cyan/10" />
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[150px] animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-neon-cyan/10 rounded-full blur-[120px] animate-glow-pulse animation-delay-500" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 text-center rounded-3xl border-primary/30 animate-fade-in-up neon-glow">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 border border-primary/30">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Start Your Journey Today</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Your Career Questions
            <br />
            <span className="gradient-text">Deserve Better Answers</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Join thousands of students who are already building their dream careers. 
            Pick your platform and become part of something bigger.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="cta" size="lg" className="group min-w-[180px]">
              <Send className="w-5 h-5" />
              Join Telegram
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cta" size="lg" className="group min-w-[180px]">
              <MessageCircle className="w-5 h-5" />
              Join WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="cta" size="lg" className="group min-w-[180px]">
              <Gamepad2 className="w-5 h-5" />
              Join Discord
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;