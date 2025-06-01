
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const handleBookCall = () => {
    // Opens Calendly booking page
    window.open('https://calendly.com/jackson-blackboardcreative/30min', '_blank');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pb-16 md:pb-24 pt-24 md:pt-36" 
      style={{ 
        background: "linear-gradient(135deg, #2c2c2d 0%, #3a3a3b 15%, #4a4a4b 30%, #5d4e3e 55%, #8b6f47 75%, #aa7550 100%)" 
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Strategy, Systems, Scale:
          </h1>
          <p className="text-base md:text-lg text-foreground/90 italic mb-4">
            "Executive coaching firms implementing AI-driven lead generation report 
            <br /><span className="font-bold">5.7x higher client acquisition rates</span> than those using traditional networking alone."
            <br /><span className="text-sm mt-1 block">– International Coaching Federation 2023 Global Coaching Study</span>
          </p>
          <p className="text-2xl md:text-3xl text-accent font-bold mb-6">
            AI-Powered Growth for Experts & Founders
          </p>
          <p className="text-md md:text-lg text-foreground/80 font-bold mb-8 max-w-2xl mx-auto whitespace-nowrap">
            Blackboard Creative's 3 Step System: From Exhausted Expert to Automated Authority
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white mb-16" onClick={handleBookCall}>
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
