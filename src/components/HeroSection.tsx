
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BikeCanvas from "./BikeCanvas";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-bike-blue/10 dark:bg-bike-darkblue/40" />
      </div>
      
      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Experience the Thrill of
              <span className="text-gradient block">Premium Superbikes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
              Discover our collection of high-performance motorcycles designed for the Indian roads and the passionate rider.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg">
                <Link to="/products">Shop Now</Link>
              </Button>
              <Button variant="outline" size="lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <BikeCanvas className="h-[400px] lg:h-[500px] animate-float" />
            <div className="absolute bottom-0 left-0 right-0 h-32 hero-gradient" />
          </div>
        </div>
      </div>
    </section>
  );
}
