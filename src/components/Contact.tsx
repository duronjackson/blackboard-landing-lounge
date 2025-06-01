
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto px-4">
        <p className="text-center italic mb-12 pt-16 text-foreground/90 text-xl">
          "In 2024, 79% of creators earning six figures said <br /><span className="font-bold italic text-[#F97316]">digital courses were their primary revenue source</span>."
          <br /><span className="text-md md:text-lg mt-1 block">– Kajabi Creator Economics Report 2024</span>
        </p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent text-center">
            Let's Build Your AI Growth Engine
          </h2>
          <p className="text-foreground/80 text-left">
            Blackboard Creative's AI Automation Solutions and Course Audits transform underperforming content into powerful conversion engines. We deliver tailored automated workflows, eliminating tedious marketing tasks, delivering targeted, higher-quality leads. Let us reveal exactly how we create predictable growth for your coaching practice, course platform, consultancy, or SaaS business—turning your expertise into a scalable asset that works even when you don't.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-card/50" />
              <Input type="email" placeholder="Email" className="bg-card/50" />
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <Input placeholder="Role/Position" className="bg-card/50" />
            </div>
            <Textarea
              placeholder="Your message"
              className="min-h-[150px] bg-card/50"
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
