
import { HighConvertingHero } from "@/components/HighConvertingHero";
import { HighConvertingServices } from "@/components/HighConvertingServices";
import { AIDriven } from "@/components/AIDriven";
import { HighConvertingTestimonial } from "@/components/HighConvertingTestimonial";
import { HighConvertingContact } from "@/components/HighConvertingContact";

const HighConversion = () => {
  return (
    <div className="min-h-screen bg-background">
      <HighConvertingHero />
      <HighConvertingTestimonial />
      <HighConvertingServices />
      <AIDriven />
      <HighConvertingContact />
    </div>
  );
};

export default HighConversion;
