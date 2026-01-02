const FloatingAvatars = () => {
  const avatars = [
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      position: "top-8 left-8",
      size: "w-20 h-20",
      delay: "animation-delay-100",
      animation: "animate-float",
      tilt: "rotate-[-8deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      position: "top-4 right-16",
      size: "w-24 h-24",
      delay: "animation-delay-300",
      animation: "animate-float-delayed",
      tilt: "rotate-[6deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      position: "top-1/3 left-4",
      size: "w-16 h-16",
      delay: "animation-delay-500",
      animation: "animate-float-slow",
      tilt: "rotate-[12deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      position: "top-1/4 right-4",
      size: "w-20 h-20",
      delay: "animation-delay-200",
      animation: "animate-float",
      tilt: "rotate-[-5deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      position: "bottom-1/3 right-12",
      size: "w-18 h-18",
      delay: "animation-delay-400",
      animation: "animate-float-delayed",
      tilt: "rotate-[8deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      position: "bottom-1/4 left-12",
      size: "w-22 h-22",
      delay: "animation-delay-700",
      animation: "animate-float-slow",
      tilt: "rotate-[-10deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
      position: "bottom-16 right-1/4",
      size: "w-16 h-16",
      delay: "animation-delay-100",
      animation: "animate-float",
      tilt: "rotate-[4deg]",
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      position: "top-1/2 left-1/3",
      size: "w-14 h-14",
      delay: "animation-delay-500",
      animation: "animate-float-delayed",
      tilt: "rotate-[-6deg]",
    },
  ];

  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      {/* Center ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px] animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-neon-cyan/15 rounded-full blur-[80px] animate-glow-pulse animation-delay-500" />
      
      {/* Floating avatars */}
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className={`absolute ${avatar.position} ${avatar.animation} ${avatar.delay}`}
        >
          <div className={`${avatar.size} ${avatar.tilt} relative`}>
            {/* Glow behind avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-neon blur-xl opacity-50 scale-110" />
            
            {/* Avatar image */}
            <div className="relative rounded-full overflow-hidden border-2 border-primary/40 avatar-glow">
              <img
                src={avatar.src}
                alt={`Community member ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Center stats card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="glass-card p-8 rounded-3xl text-center animate-pulse-neon border border-primary/30">
          <p className="text-5xl md:text-6xl font-bold text-foreground">10K+</p>
          <p className="text-sm text-muted-foreground mt-2">Active Students</p>
        </div>
      </div>

      {/* Additional decorative glows */}
      <div className="absolute top-20 right-8 w-3 h-3 rounded-full bg-neon-cyan animate-pulse" />
      <div className="absolute bottom-32 left-16 w-2 h-2 rounded-full bg-neon-purple animate-pulse animation-delay-300" />
      <div className="absolute top-1/2 right-20 w-2 h-2 rounded-full bg-neon-pink animate-pulse animation-delay-700" />
    </div>
  );
};

export default FloatingAvatars;