
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { X, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleCheckout = () => {
    // This would typically redirect to a checkout page or process
    toast({
      title: "Proceeding to checkout",
      description: "Redirecting to secure payment gateway...",
    });
    
    // Simulate a checkout process, then redirect to success
    setTimeout(() => {
      navigate("/checkout");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Looks like you haven't added any superbikes to your cart yet.
            </p>
            <Button onClick={() => navigate("/products")}>
              Browse Superbikes
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/30">
                    <tr>
                      <th className="text-left p-4">Product</th>
                      <th className="text-center p-4">Quantity</th>
                      <th className="text-right p-4">Price</th>
                      <th className="p-4 w-10"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {items.map((item) => (
                      <tr key={item.product.id}>
                        <td className="p-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 rounded bg-muted/20 overflow-hidden">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{item.product.name}</h3>
                              <p className="text-sm text-muted-foreground">
                                {item.product.brand}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center space-x-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  Math.max(1, item.quantity - 1)
                                )
                              }
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8"
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                            >
                              +
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          <div>
                            <p className="font-medium">
                              ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              ₹{item.product.price.toLocaleString("en-IN")} each
                            </p>
                          </div>
                        </td>
                        <td className="p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFromCart(item.product.id)}
                            className="h-8 w-8"
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-between mt-6">
                <Button variant="outline" onClick={() => navigate("/products")}>
                  Continue Shopping
                </Button>
                <Button variant="outline" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="border rounded-lg p-6 space-y-6 sticky top-24">
                <h3 className="text-lg font-medium">Order Summary</h3>
                
                <div className="space-y-4 border-b pb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
                    <span>₹{total.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span>₹{(total * 0.18).toLocaleString("en-IN")}</span>
                  </div>
                </div>
                
                <div className="flex justify-between font-medium text-lg">
                  <span>Total</span>
                  <span>₹{(total * 1.18).toLocaleString("en-IN")}</span>
                </div>
                
                <Button className="w-full" size="lg" onClick={handleCheckout}>
                  Proceed to Checkout
                </Button>
                
                <div className="text-sm text-muted-foreground text-center">
                  <p>We accept all major credit cards and UPI payments</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
