import { Button } from "@/components/ui/button";
import { Send, MessageCircle, Gamepad2, ArrowRight, Check } from "lucide-react";

const platforms = [
  {
    icon: Send,
    name: "Telegram Community",
    description: "Fast updates & open discussions",
    features: ["Daily career tips", "Industry news", "Open Q&A sessions"],
    glowColor: "from-blue-500 to-cyan-400",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-400",
    link: "#telegram",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp Community",
    description: "Focused groups for serious learners",
    features: ["Smaller focused groups", "Quick doubt clearing", "Daily motivation"],
    glowColor: "from-green-500 to-emerald-400",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-400",
    link: "#whatsapp",
  },
  {
    icon: Gamepad2,
    name: "Discord Community",
    description: "Interactive channels & voice sessions",
    features: ["Topic-wise channels", "Voice discussions", "Live mentor sessions"],
    glowColor: "from-indigo-500 to-purple-400",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-400",
    link: "#discord",
  },
];

const PlatformsSection = () => {
  return (
    <section id="platforms" className="py-20 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your
            <span className="gradient-text"> Community Platform</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join the platform that suits your learning style. All communities offer the same quality—just pick your preference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="glass-card p-6 lg:p-8 group hover:border-primary/50 transition-all duration-500 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${platform.glowColor} blur-xl`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${platform.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <platform.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {platform.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {platform.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="platform" className="w-full group/btn">
                  Join {platform.name.split(' ')[0]}
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformsSection;