
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/hooks/use-cart";
import { CreditCard, IndianRupee } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate("/checkout-success");
    }, 2000);
  };

  if (items.length === 0) {
    navigate("/products");
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="border rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-medium">Shipping Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" required />
                  </div>
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input id="city" required />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Input id="state" required />
                  </div>
                  <div>
                    <Label htmlFor="pincode">Pincode</Label>
                    <Input id="pincode" required />
                  </div>
                  <div>
                    <Label htmlFor="country">Country</Label>
                    <Input id="country" defaultValue="India" required />
                  </div>
                  <div className="md:col-span-2 flex items-start space-x-2 pt-2">
                    <Checkbox id="shipping-billing-same" defaultChecked />
                    <Label
                      htmlFor="shipping-billing-same"
                      className="text-sm cursor-pointer"
                    >
                      Billing address is the same as shipping address
                    </Label>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-medium">Payment Method</h2>
                
                <RadioGroup defaultValue="card">
                  <div className="flex items-center space-x-2 mb-4">
                    <RadioGroupItem value="card" id="payment-card" />
                    <Label htmlFor="payment-card" className="flex items-center cursor-pointer">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="pl-6 space-y-4">
                    <div>
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" type="password" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input id="name-on-card" />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mt-4">
                    <RadioGroupItem value="upi" id="payment-upi" />
                    <Label htmlFor="payment-upi" className="flex items-center cursor-pointer">
                      <IndianRupee className="mr-2 h-4 w-4" />
                      UPI
                    </Label>
                  </div>
                  <div className="pl-6 space-y-4 mt-4">
                    <div>
                      <Label htmlFor="upi-id">UPI ID</Label>
                      <Input id="upi-id" placeholder="yourname@upi" />
                    </div>
                  </div>
                </RadioGroup>
              </div>
              
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Complete Order"}
              </Button>
            </form>
          </div>
          
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6 space-y-6 sticky top-24">
              <h3 className="text-lg font-medium">Order Summary</h3>
              
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 rounded bg-muted/20 overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm font-medium">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (18%)</span>
                  <span>₹{(total * 0.18).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between font-medium text-lg pt-2">
                  <span>Total</span>
                  <span>₹{(total * 1.18).toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
