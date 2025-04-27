import { Bot, LineChart, Users, Target, Zap, Book, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Automation Solutions",
    description: "Streamline your marketing operations with our AI automation services.",
    icon: Bot,
    benefits: [
      "Cut operational costs by up to 40%",
      "24/7 lead nurturing and follow-up",
      "Predictive customer insights",
      "Seamless CRM integration"
    ]
  },
  {
    title: "Course/Curriculum Audit",
    description: "Build curriculum that delivers tailored, measurable outcomes.",
    icon: Book,
    benefits: [
      "Comprehensive content gap analysis",
      "Student engagement optimization",
      "Learning outcome measurement",
      "Higher completion and satisfaction rates"
    ]
  },
  {
    title: "Pay Per Lead Offer",
    description: "Only pay for the leads that qualify for your business—no hidden fees, just results.",
    icon: Target,
    benefits: [
      "No upfront costs or retainers",
      "Custom lead qualification criteria",
      "Real-time lead delivery",
      "Continuous quality optimization"
    ]
  },
  {
    title: "Digital Marketing Strategies",
    description: "Leverage our expertise to enhance your online presence and stay ahead of the competition.",
    icon: LineChart,
    benefits: [
      "Data-driven campaign optimization",
      "Multi-channel approach for wider reach",
      "Competitive analysis and positioning",
      "Measurable ROI on every dollar spent"
    ]
  }
];

export const HighConvertingServices = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-accent font-medium">OUR SOLUTIONS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            AI-Powered Services That Deliver Results
          </h2>
          <p className="text-center text-foreground/80 max-w-3xl mx-auto">
            Blackboard Creative combines cutting-edge AI technology with proven strategies to help businesses 
            like yours achieve measurable growth and ROI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-6">
                <div className="h-12 w-12 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <p className="text-foreground/80 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
