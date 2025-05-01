
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "#404041" }}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Strategy, Systems, Scale:
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-bold mb-6">
            AI-Powered Growth for Experts & Founders
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            Blackboard Creative's 3 Step System: From Exhausted Expert to Automated Authority
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Book a Call <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
