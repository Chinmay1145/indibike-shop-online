
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CheckCircle, ShoppingBag } from "lucide-react";

const CheckoutSuccessPage = () => {
  // Generate a random order number
  const orderNumber = `INB-${Math.floor(Math.random() * 900000) + 100000}`;
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-12">
        <div className="max-w-lg mx-auto text-center">
          <div className="mb-6 text-green-500 flex justify-center">
            <CheckCircle className="h-16 w-16" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Order Successful!</h1>
          <p className="text-muted-foreground mb-8">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
          
          <div className="bg-muted/20 rounded-lg p-6 mb-8">
            <h2 className="font-medium text-lg mb-4">Order Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span>Order Number:</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Order Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Shipping Method:</span>
                <span className="font-medium">Express Delivery</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>Estimated Delivery:</span>
                <span className="font-medium">
                  {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground mb-8">
            A confirmation email has been sent to your registered email address with all the order details.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Button asChild size="lg">
              <Link to="/products">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutSuccessPage;
