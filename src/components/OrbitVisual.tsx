import { GraduationCap, MessageCircle, Rocket, Sparkles, Star, Lightbulb } from "lucide-react";

const OrbitVisual = () => {
  const avatars = [
    { delay: "0s", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
    { delay: "0.5s", position: "top-1/4 right-0 translate-x-1/2" },
    { delay: "1s", position: "bottom-1/4 right-0 translate-x-1/2" },
    { delay: "1.5s", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
    { delay: "2s", position: "bottom-1/4 left-0 -translate-x-1/2" },
    { delay: "2.5s", position: "top-1/4 left-0 -translate-x-1/2" },
  ];

  const icons = [
    { Icon: GraduationCap, color: "text-accent", position: "top-8 right-8" },
    { Icon: MessageCircle, color: "text-primary", position: "bottom-16 left-4" },
    { Icon: Rocket, color: "text-peach", position: "top-1/3 -right-4" },
  ];

  return (
    <div className="relative w-full max-w-lg aspect-square mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />
      
      {/* Outer orbit ring */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-orbit-reverse" />
      
      {/* Middle orbit ring */}
      <div className="absolute inset-12 rounded-full border border-primary/30 animate-orbit" />
      
      {/* Inner orbit ring */}
      <div className="absolute inset-24 rounded-full border border-primary/40" />

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-card p-8 rounded-3xl text-center animate-pulse-glow">
          <p className="text-4xl md:text-5xl font-bold text-foreground">10K+</p>
          <p className="text-sm text-muted-foreground mt-1">Active Students</p>
        </div>
      </div>

      {/* Floating avatars on orbit */}
      <div className="absolute inset-0 animate-orbit" style={{ animationDuration: '40s' }}>
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`absolute ${avatar.position}`}
            style={{ animationDelay: avatar.delay }}
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center animate-float border border-primary/30">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary/60 to-accent/60" />
            </div>
          </div>
        ))}
      </div>

      {/* Floating icons */}
      {icons.map(({ Icon, color, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float-slow`}
          style={{ animationDelay: `${index * 0.3}s` }}
        >
          <div className="glass-card p-3 rounded-xl border border-primary/20">
            <Icon className={`w-5 h-5 ${color}`} />
          </div>
        </div>
      ))}

      {/* Small decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/50 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/6 w-1 h-1 rounded-full bg-peach/50 animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default OrbitVisual;
