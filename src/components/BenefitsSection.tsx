import { 
  Compass, 
  HelpCircle,
  FileText, 
  Users, 
  TrendingUp, 
  Lightbulb
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Get personalized career roadmaps from industry experts and mentors.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(270_100%_60%/0.4)]",
  },
  {
    icon: HelpCircle,
    title: "Doubt Solving",
    description: "Get your questions answered quickly by the community and mentors.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)]",
  },
  {
    icon: FileText,
    title: "Resume Reviews",
    description: "Get your resume reviewed by professionals and improve your chances.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(320_100%_60%/0.4)]",
  },
  {
    icon: TrendingUp,
    title: "Interview Prep",
    description: "Practice with mock interviews and real interview questions.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(270_100%_60%/0.4)]",
  },
  {
    icon: Users,
    title: "Peer Networking",
    description: "Connect with like-minded students and build lasting relationships.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(190_100%_50%/0.4)]",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description: "Stay updated with the latest trends and opportunities in your field.",
    glowColor: "group-hover:shadow-[0_0_30px_hsl(320_100%_60%/0.4)]",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-neon-purple/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-neon-cyan/6 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why Join
            <span className="gradient-text"> Our Community?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to accelerate your career growth, all in one place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`glass-card p-6 lg:p-8 group hover:border-primary/40 transition-all duration-500 animate-fade-in-up ${benefit.glowColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-neon flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;