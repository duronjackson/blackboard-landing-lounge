
import { Brain, Target, Zap, BarChart4, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AIDriven = () => {
  return (
    <section className="py-20 relative bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI-Driven Lead Generation
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto">
            Our AI-powered lead generation solution is designed to deliver high-quality, conversion-ready
            leads for your business. Through advanced technology and data-driven strategies, we'll help
            you acquire prospects who are most likely to convert into paying customers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-card shadow-lg border-primary/10">
            <CardHeader>
              <Target className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Pay-Per-Lead Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Lead Qualification Criteria</h3>
                <p className="text-foreground/70">Each lead will be carefully filtered to meet your specific qualification standards, ensuring only high-quality leads are delivered.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Cost Per Lead</h3>
                <p className="text-foreground/70">You will pay a fixed fee for each qualified lead generated, determined based on your average conversion rates and cost-per-acquisition.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Ongoing Optimization</h3>
                <p className="text-foreground/70">Our AI tools continuously collect data, analyze and optimize the lead generation process, improving lead quality over time.</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card shadow-lg border-primary/10">
            <CardHeader>
              <BarChart4 className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>Performance Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Revenue Share Structure</h3>
                <p className="text-foreground/70">We offer a revenue-sharing model where we take an agreed percentage of the revenue generated from each lead that converts into a paying customer.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Performance Monitoring</h3>
                <p className="text-foreground/70">Using AI analytics, we'll track the entire customer journey, from lead generation to conversion, ensuring that we're optimizing our strategies in real-time.</p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Aligned Incentives</h3>
                <p className="text-foreground/70">Our compensation depends on the quality and value of the leads we deliver, ensuring we're fully aligned with your success.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">Why Choose Our AI-Driven Lead Generation?</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "Efficient & Scalable",
              description: "AI technology ensures that your lead generation efforts are efficient, automated, and scalable.",
              icon: Zap
            },
            {
              title: "Higher Conversion",
              description: "With predictive analytics and data-driven targeting, we deliver leads that are more likely to convert.",
              icon: BarChart4
            },
            {
              title: "Cost-Effective",
              description: "Our AI-powered approach yields better results at a lower cost compared to traditional methods.",
              icon: Target
            },
            {
              title: "Aligned Goals",
              description: "We're focused on driving the best possible outcomes, as our success is tied to your results.",
              icon: Users
            }
          ].map((item, index) => (
            <Card key={index} className="bg-card shadow-lg border-primary/10">
              <CardHeader className="pb-2">
                <item.icon className="h-8 w-8 mb-2 text-primary" />
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
