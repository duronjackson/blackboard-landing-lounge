
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { AIDriven } from "@/components/AIDriven";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Services />
      <AIDriven />
      <Contact />
    </div>
  );
};

export default Index;
