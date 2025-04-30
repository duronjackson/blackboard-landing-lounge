
import { Bot, LineChart, Users, Target, Zap, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Automation Solutions",
    description: "Streamline your marketing operations with our AI automation services. Effortlessly track leads, segment customers, and personalize communication to nurture relationships and convert more prospects into loyal clients.",
    icon: Bot,
  },
  {
    title: "Course/Curriculum Audit",
    description: "Build curriculum that delivers tailored, measurable outcomes. Whether you're looking for an audit to ensure your course is aligned with your goals or need custom content development, we can help. Let's work together to elevate your material and ensure your content engages your audience and delivers the impact you're looking for.",
    icon: Book,
  },
  {
    title: "Pay Per Lead Offer",
    description: "Only pay for the leads that qualify for your business—no hidden fees, just results. Our innovative pay-per-lead model ensures you get the most out of your marketing budget while connecting with high-quality prospects.",
    icon: Target,
  },
  {
    title: "Digital Marketing Strategies",
    description: "From SEO and PPC to content marketing and social media, Blackboard Creative will craft a tailored digital marketing strategy to meet your unique business needs. Leverage our expertise to enhance your online presence and stay ahead of the competition.",
    icon: LineChart,
  }
];

export const Services = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center font-bold text-xl md:text-2xl text-primary mb-4 max-w-3xl mx-auto">
          Blackboard Creative: AI-Powered Solutions for Measurable Growth
        </p>
        <p className="text-center text-foreground/80 mb-12 max-w-3xl mx-auto">
          At Blackboard Creative, we harness cutting-edge AI to revolutionize your business operations. Our proprietary AI systems analyze market data, automate personalized outreach, and optimize conversion pathways—creating intelligent business solutions that work while you sleep. We engineer these AI ecosystems to deliver scalable growth specifically designed for coaches, consultants, and SaaS companies.
          <br /><em>We don't sell services.  We build revenue-generating systems that scale with your business.</em>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card shadow-lg border-primary/10">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
