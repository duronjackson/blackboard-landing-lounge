import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 hero-gradient blur-[100px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with
            <span className="gradient-text block mt-2">Digital Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We combine digital marketing expertise with AI-powered automation to drive real business growth
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};