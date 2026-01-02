import { 
  Compass, 
  FileText, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  Heart 
} from "lucide-react";

const benefits = [
  {
    icon: Compass,
    title: "Career Guidance",
    description: "Get personalized career roadmaps from industry experts and mentors.",
  },
  {
    icon: FileText,
    title: "Resume Reviews",
    description: "Get your resume reviewed by professionals and improve your chances.",
  },
  {
    icon: TrendingUp,
    title: "Interview Prep",
    description: "Practice with mock interviews and real interview questions.",
  },
  {
    icon: Users,
    title: "Peer Networking",
    description: "Connect with like-minded students and build lasting relationships.",
  },
  {
    icon: Lightbulb,
    title: "Industry Insights",
    description: "Stay updated with the latest trends and opportunities in your field.",
  },
  {
    icon: Heart,
    title: "Community Support",
    description: "24/7 support from a community that genuinely cares about your growth.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20 lg:py-32 relative">
      {/* Background effects */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      
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
              className="glass-card p-6 lg:p-8 group hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-primary" />
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
