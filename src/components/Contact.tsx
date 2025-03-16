
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
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-300">
            Ready to take your marketing to new heights? Contact us today for a free consultation audit and
            let's achieve your goals together! Blackboard Creative is committed to your success. 
            Let's revolutionize your lead generation and marketing strategies with the power of AI.
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
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
