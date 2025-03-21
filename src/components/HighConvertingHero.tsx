
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export const HighConvertingHero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    setEmail("");
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#404041" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Increase Your ROI with
              <span className="block mt-2 text-accent">AI-Powered Marketing</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              Join 500+ businesses that have doubled their qualified leads without increasing their budget.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Only pay for qualified leads that match your criteria",
                "AI-driven automation saves you 15+ hours per week",
                "Customized solutions for your industry requirements"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email" 
                className="px-4 py-3 bg-card/50 border border-input rounded-md w-full sm:w-auto"
                required
              />
              <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-white">
                Get Your Free Audit <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <p className="text-xs text-foreground/60">
              By signing up, you'll receive a free marketing audit and occasional updates. No spam ever.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-lg shadow-lg border border-primary/10 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4 text-center">See Your Potential ROI</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm mb-1">Current Monthly Marketing Budget</label>
                <input type="text" placeholder="$5,000" className="w-full px-4 py-2 rounded-md bg-background/50 border border-input" />
              </div>
              <div>
                <label className="block text-sm mb-1">Current Monthly Qualified Leads</label>
                <input type="text" placeholder="50" className="w-full px-4 py-2 rounded-md bg-background/50 border border-input" />
              </div>
              <div>
                <label className="block text-sm mb-1">Average Sale Value</label>
                <input type="text" placeholder="$2,000" className="w-full px-4 py-2 rounded-md bg-background/50 border border-input" />
              </div>
            </div>
            <Button className="w-full bg-accent hover:bg-accent/90 text-white">
              Calculate My Potential ROI
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
