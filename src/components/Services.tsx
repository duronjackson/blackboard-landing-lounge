
import { Bot, LineChart, Book } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI Automation Solutions",
    description: "Eliminate manual prospecting, inconsistent lead flow, and high customer acquisition costs with AI marketing solutions designed specifically for coaches, course creators, consultants, and SaaS founders. Our systems automate repetitive tasks, identify qualified leads, deliver perfectly-timed personalized messages, and provide actionable insights—letting you focus on serving clients while your business grows on autopilot.",
    icon: Bot,
  },
  {
    title: "Course/Curriculum Audit",
    description: "Transform underperforming courses and knowledge assets into high-converting client acquisition tools. For course creators battling low completion rates, SaaS founders struggling with user onboarding, coaches trying to scale beyond 1:1 work, and consultants packaging expertise—we engineer learning experiences that engage, convert, and deliver measurable outcomes. Our curriculum audits identify critical gaps while our optimization process enhances retention and results, turning your intellectual property into your most powerful marketing asset without sacrificing the quality that built your reputation.",
    icon: Book,
  },
  {
    title: "Digital Marketing Strategies",
    description: "Cut through the noise with targeted digital marketing strategies crafted specifically for coaches, course creators, consultants, and SaaS founders. Our end-to-end solutions address your unique challenges—from ineffective SEO and wasted ad spend to inconsistent content creation and poor social engagement. We'll transform your digital presence with data-backed strategies that attract qualified leads, position you as an authority, and convert at every stage of your funnel—delivering measurable ROI where generic approaches fail.",
    icon: LineChart,
  }
];

export const Services = () => {
  return (
    <section className="py-12 relative" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Services
        </h2>
        <p className="text-center font-bold text-xl md:text-2xl text-primary mb-4 max-w-3xl mx-auto">
          Blackboard Creative: AI-Powered Solutions for Measurable Growth
        </p>
        <p className="text-center text-justify text-foreground/80 mb-12 max-w-3xl mx-auto">
          At Blackboard Creative, we harness cutting-edge AI to revolutionize your business operations. Our proprietary AI systems analyze market data, automate personalized outreach, and optimize conversion pathways—creating intelligent business solutions that work while you sleep. We engineer these AI ecosystems to deliver scalable growth specifically designed for coaches, consultants, and SaaS companies.
          <br /><br /><em className="block text-center">We don't sell services.  We build revenue-generating systems that scale with your business.</em>
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {/* First row with two cards */}
          <Card className="bg-card shadow-lg border-primary/10">
            <CardHeader>
              <Bot className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>{services[0].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">{services[0].description}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card shadow-lg border-primary/10">
            <CardHeader>
              <Book className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>{services[1].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">{services[1].description}</p>
            </CardContent>
          </Card>
          
          {/* Second row with card spanning both columns, but left-aligned content */}
          <Card className="bg-card shadow-lg border-primary/10 md:col-span-2">
            <CardHeader>
              <LineChart className="h-12 w-12 mb-4 text-primary" />
              <CardTitle>{services[2].title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70">{services[2].description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
