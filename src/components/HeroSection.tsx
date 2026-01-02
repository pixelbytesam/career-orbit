import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import OrbitVisual from "./OrbitVisual";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6 border border-primary/20">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm text-muted-foreground">Join 10,000+ Students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Build Your Career
              <br />
              <span className="gradient-text">With The Right</span>
              <br />
              Community
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Ask questions. Get career guidance.
              <br />
              Learn from students, mentors & professionals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Join Our Community
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="xl">
                Explore Platforms
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 mt-10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-primary/60 to-accent/60"
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Trusted by students from</p>
                <p className="text-xs text-muted-foreground">IIT, NIT, BITS & 100+ colleges</p>
              </div>
            </div>
          </div>

          {/* Right content - Orbit Visual */}
          <div className="lg:pl-8 animate-fade-in-up animation-delay-200">
            <OrbitVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
