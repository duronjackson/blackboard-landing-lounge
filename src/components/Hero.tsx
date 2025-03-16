
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
            <span className="block mt-2 text-orange-500">Digital Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience seamless lead generation and automated marketing strategies tailored for your business.
          </p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
