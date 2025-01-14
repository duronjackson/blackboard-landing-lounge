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
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Let's Work Together
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Name" className="bg-card/50" />
              <Input type="email" placeholder="Email" className="bg-card/50" />
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