import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Gamepad2, ArrowRight, Sparkles } from "lucide-react";
import FloatingAvatars from "./FloatingAvatars";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-cyan/8 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-neon-pink/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 border border-primary/30">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Join 10,000+ Students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              A Career Community
              <br />
              <span className="gradient-text">Built For Students</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-10 leading-relaxed">
              Ask questions. Get real career guidance.
              <br />
              Learn with students, mentors & professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                <Send className="w-5 h-5" />
                Join Telegram
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl" className="group">
                <MessageCircle className="w-5 h-5" />
                Join WhatsApp
              </Button>
              <Button variant="glass" size="xl" className="group">
                <Gamepad2 className="w-5 h-5" />
                Join Discord
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden"
                  >
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Trusted by students from</p>
                <p className="text-xs text-muted-foreground">IIT, NIT, BITS & 100+ colleges</p>
              </div>
            </div>
          </div>

          {/* Right content - Floating Avatars */}
          <div className="lg:pl-8 animate-fade-in-up animation-delay-200">
            <FloatingAvatars />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;