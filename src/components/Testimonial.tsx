
import { Quote } from "lucide-react";

export const Testimonial = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="h-12 w-12 mx-auto mb-6 text-primary opacity-50" />
          <blockquote className="text-xl md:text-2xl italic mb-6">
            "Blackboard Creative's AI-powered solutions have transformed our lead generation
            efforts. We've seen a significant increase in qualified leads and a higher conversion
            rate—truly a game-changer for our business."
          </blockquote>
          <div className="font-medium">
            - Sarah, CEO of XYZ Corp.
          </div>
        </div>
      </div>
    </section>
  );
};
