
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            company,
            message,
          }
        ]);

      if (error) {
        console.error('Error saving contact:', error);
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        // Reset form
        e.currentTarget.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-8" id="contact">
      <div className="container mx-auto px-4">
        <p className="text-center italic mb-8 pt-8 text-foreground/90 text-lg">
          "In 2024, 79% of creators earning six figures said <br /><span className="font-bold italic text-[#F97316]">digital courses were their primary revenue source</span>."
          <br /><span className="text-sm md:text-base mt-1 block">– Kajabi Creator Economics Report 2024</span>
        </p>
        
        <div className="max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent text-center">
            Let's Build Your AI Growth Engine
          </h2>
          <p className="text-foreground/80 text-left">
            Blackboard Creative's AI Automation, System Solutions and Course Audits transform underperforming content into powerful conversion engines. We deliver tailored automated workflows, eliminating tedious marketing tasks, delivering targeted, higher-quality leads. Let us reveal exactly how we create predictable growth for your coaching practice, course platform, consultancy, or SaaS business—turning your expertise into a scalable asset that works even when you don't.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input name="name" placeholder="Name" className="bg-card/50" required />
              <Input name="email" type="email" placeholder="Email" className="bg-card/50" required />
            </div>
            <div className="grid md:grid-cols-1 gap-6">
              <Input name="company" placeholder="Company" className="bg-card/50" />
            </div>
            <Textarea
              name="message"
              placeholder="Your message"
              className="min-h-[150px] bg-card/50"
            />
            <Button 
              type="submit" 
              className="w-full bg-accent hover:bg-accent/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
