
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIDriven } from "@/components/AIDriven";
import { Testimonial } from "@/components/Testimonial";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <AIDriven />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Index;
