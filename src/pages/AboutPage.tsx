
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BikeCanvas from "@/components/BikeCanvas";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="relative overflow-hidden py-16 md:py-24 bg-muted/30">
          <div className="container relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About IndiBikes</h1>
              <p className="text-lg text-muted-foreground mb-8">
                India's premier destination for premium superbikes, delivering performance, style, and unmatched riding experiences.
              </p>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6">
                Founded in 2015, IndiBikes started with a simple mission: to bring world-class superbikes to Indian enthusiasts while providing exceptional service and support.
              </p>
              <p className="text-muted-foreground mb-6">
                What began as a small dealership in Mumbai has grown into India's leading superbike retailer, with showrooms across major cities and a reputation for excellence in the motorcycle community.
              </p>
              <p className="text-muted-foreground">
                We've partnered with the world's top motorcycle manufacturers to offer the best selection of high-performance bikes, customized for Indian roads and riders.
              </p>
            </div>
            <div>
              <BikeCanvas className="h-[400px] w-full shadow-lg rounded-lg" />
            </div>
          </div>
        </div>
        
        <div className="bg-muted/20 py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Choose IndiBikes</h2>
              <p className="text-muted-foreground">
                We're more than just a retailer – we're passionate riders committed to building a community around the love of motorcycles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Premium Selection</h3>
                <p className="text-muted-foreground">
                  We carefully curate our collection to offer only the highest-quality superbikes from renowned manufacturers worldwide.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Expert Service</h3>
                <p className="text-muted-foreground">
                  Our team of certified technicians provides exceptional maintenance and customization services for all makes and models.
                </p>
              </div>
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-medium mb-4">Rider Community</h3>
                <p className="text-muted-foreground">
                  Join our growing community of enthusiasts for group rides, track days, and exclusive motorcycle events across India.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-muted-foreground mb-12">
              Led by motorcycle enthusiasts with decades of industry experience, our team is dedicated to providing exceptional service and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Raj Kumar</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Priya Sharma</h3>
              <p className="text-muted-foreground">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-4"></div>
              <h3 className="text-xl font-medium">Arjun Patel</h3>
              <p className="text-muted-foreground">Chief Mechanic</p>
            </div>
          </div>
        </div>
        
        <div className="bg-bike-blue/10 dark:bg-bike-darkblue/40 py-16">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience the Ride?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Visit one of our showrooms or browse our online collection to find your perfect superbike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/products">Browse Superbikes</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
