
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Check, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useState, useRef } from "react";

export const HighConvertingContact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const company = formData.get('company') as string;
    const budget = formData.get('budget') as string;
    const message = formData.get('message') as string;

    // Combine all form data into a structured message
    const fullMessage = `Phone: ${phone || 'Not provided'}
Budget: ${budget || 'Not provided'}
Message: ${message || 'No additional message'}`;

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name,
            email,
            company,
            message: fullMessage,
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
          description: "We'll get back to you within 24 hours.",
        });
        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset();
        }
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
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-accent font-medium">CONTACT US</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Let's Start Growing Your Business Today
              </h2>
              <p className="text-foreground/80 mb-8">
                Ready to take your marketing to new heights? Contact us today for a free consultation 
                audit and let's achieve your goals together!
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-foreground/70">hello@blackboardcreative.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-foreground/70">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-accent/10 text-accent rounded-full flex items-center justify-center">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-foreground/70">123 Innovation Drive, Suite 300<br />San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-primary/10">
                <h3 className="font-bold mb-4">What happens next?</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="bg-accent/20 h-6 w-6 rounded-full flex items-center justify-center text-accent font-bold text-sm">1</div>
                    <p>We'll connect within 24 hours to discuss your needs</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-accent/20 h-6 w-6 rounded-full flex items-center justify-center text-accent font-bold text-sm">2</div>
                    <p>We'll provide a complimentary audit of your current marketing</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-accent/20 h-6 w-6 rounded-full flex items-center justify-center text-accent font-bold text-sm">3</div>
                    <p>We'll prepare and present a custom proposal for your review</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg shadow-lg border border-primary/10">
              <h3 className="text-xl font-bold mb-6">Get Your Free Marketing Audit</h3>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-1">Full Name*</label>
                    <Input name="name" placeholder="John Smith" className="bg-background/50" required />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Email*</label>
                    <Input name="email" type="email" placeholder="john@company.com" className="bg-background/50" required />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-1">Phone</label>
                    <Input name="phone" placeholder="(555) 123-4567" className="bg-background/50" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Company*</label>
                    <Input name="company" placeholder="Your Company" className="bg-background/50" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Monthly Marketing Budget*</label>
                  <select name="budget" className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background/50 text-base" required>
                    <option value="">Select a range</option>
                    <option value="0-5000">$0 - $5,000</option>
                    <option value="5001-10000">$5,001 - $10,000</option>
                    <option value="10001-25000">$10,001 - $25,000</option>
                    <option value="25001+">$25,001+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm mb-1">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your goals and challenges"
                    className="min-h-[120px] bg-background/50"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Free Audit"} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                
                <p className="text-xs text-foreground/60 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
