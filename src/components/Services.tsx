
import { Bot, LineChart, Users, Target, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Pay Per Lead Offer",
    description: "Only pay for the leads that qualify for your business—no hidden fees, just results. Our innovative pay-per-lead model ensures you get the most out of your marketing budget while connecting with high-quality prospects.",
    icon: Target,
  },
  {
    title: "AI Automation Solutions",
    description: "Streamline your marketing operations with our AI automation services. Effortlessly track leads, segment customers, and personalize communication to nurture relationships and convert more prospects into loyal clients.",
    icon: Bot,
  },
  {
    title: "Digital Marketing Strategies",
    description: "From SEO and PPC to content marketing and social media, Blackboard Creative will craft a tailored digital marketing strategy to meet your unique business needs. Leverage our expertise to enhance your online presence and stay ahead of the competition.",
    icon: LineChart,
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Blackboard Creative is at the forefront of AI-driven digital marketing. Our team of experts
          combines cutting-edge technology with proven strategies to help businesses like yours elevate
          their lead generation, and digital marketing efforts to drive tangible results.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card/50 backdrop-blur border-primary/10">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
