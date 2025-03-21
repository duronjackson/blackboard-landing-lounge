
import { Quote, Star } from "lucide-react";

export const HighConvertingTestimonial = () => {
  return (
    <section className="py-12 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Trusted by Industry Leaders</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md border border-primary/10">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-md italic mb-6">
              "Blackboard Creative's AI-powered solutions have transformed our lead generation
              efforts. We've seen a 215% increase in qualified leads and a 40% higher conversion
              rate in just 3 months."
            </blockquote>
            <div className="font-medium flex items-center">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold mr-3">S</div>
              <div>
                <p className="font-medium">Sarah Johnson</p>
                <p className="text-sm text-foreground/70">CEO, Apex Solutions</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-primary/10">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-md italic mb-6">
              "The pay-per-lead model saved us thousands while delivering better quality prospects than our previous agency. Their AI tools provide insights we didn't know we needed."
            </blockquote>
            <div className="font-medium flex items-center">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold mr-3">M</div>
              <div>
                <p className="font-medium">Michael Rodriguez</p>
                <p className="text-sm text-foreground/70">Marketing Director, TechForward</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-md border border-primary/10">
            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 text-accent fill-accent" />
              ))}
            </div>
            <blockquote className="text-md italic mb-6">
              "After restructuring our course curriculum with Blackboard Creative, enrollment increased by 85% and student completion rates jumped from 23% to 78%. Absolutely worth every penny."
            </blockquote>
            <div className="font-medium flex items-center">
              <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold mr-3">J</div>
              <div>
                <p className="font-medium">Jennifer Patel</p>
                <p className="text-sm text-foreground/70">Founder, EduGrowth Academy</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70">
            {['TechCorp', 'GlobalMedia', 'InnovateCo', 'PrimeSolutions', 'NexusGroup'].map((company) => (
              <div key={company} className="text-xl font-bold tracking-tight">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
