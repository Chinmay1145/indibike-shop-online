
import { Shield, Truck, CreditCard, Clock } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Truck className="h-10 w-10" />,
      title: "Free Shipping",
      description: "Free delivery across India on all superbikes",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "2 Year Warranty",
      description: "Extended warranty with service available nationwide",
    },
    {
      icon: <CreditCard className="h-10 w-10" />,
      title: "Secure Payment",
      description: "Multiple secure payment options available",
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and assistance",
    },
  ];

  return (
    <section className="bg-muted/30 py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 glass-card"
            >
              <div className="mb-4 text-primary">{feature.icon}</div>
              <h3 className="text-lg font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
