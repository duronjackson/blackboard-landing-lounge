
import { Bot, LineChart, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that drive engagement and conversions",
    icon: LineChart,
  },
  {
    title: "Lead Generation",
    description: "Targeted approaches to attract and convert high-quality leads",
    icon: Users,
  },
  {
    title: "AI Automation",
    description: "Smart business automation solutions to scale your operations",
    icon: Bot,
  },
];

export const Services = () => {
  return (
    <section className="py-20 relative" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-card backdrop-blur border-primary/10 shadow-md">
              <CardHeader>
                <service.icon className="h-12 w-12 mb-4 text-primary" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
