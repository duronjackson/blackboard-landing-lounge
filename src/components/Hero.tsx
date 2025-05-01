
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#404041" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Strategy, Systems, Scale:
            <span className="block mt-2">AI-Powered Growth for Experts & Founders</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Experience seamless lead generation and automated marketing strategies tailored for your business.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
