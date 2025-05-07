
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BikeCanvas from "@/components/BikeCanvas";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { allProducts } from "@/data/products";
import { useCart } from "@/hooks/use-cart";
import { ShoppingCart } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The product you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/products")}>
            Back to Products
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Related products - same category, excluding current product
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative">
              <BikeCanvas className="h-[400px] w-full" />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-muted-foreground">{product.brand}</h2>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="mt-4 flex items-center space-x-2">
                  <p className="text-2xl font-bold">₹{product.price.toLocaleString('en-IN')}</p>
                  {product.inStock ? (
                    <span className="text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded text-xs font-medium">
                      In Stock
                    </span>
                  ) : (
                    <span className="text-red-600 bg-red-100 dark:bg-red-900/30 px-2 py-1 rounded text-xs font-medium">
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>
              
              <p className="text-muted-foreground">{product.description}</p>
              
              <div>
                <h3 className="font-medium mb-2">Available Colors</h3>
                <div className="flex space-x-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full border-2 ${
                        selectedColor === color
                          ? "border-primary ring-2 ring-primary/20"
                          : "border-muted"
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(prev => prev + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 pt-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    handleAddToCart();
                    navigate("/cart");
                  }}
                  disabled={!product.inStock}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <Tabs defaultValue="specs">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specs" className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Engine</h4>
                        <p className="font-medium">{product.specs.engine}</p>
                      </div>
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Power</h4>
                        <p className="font-medium">{product.specs.power}</p>
                      </div>
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Torque</h4>
                        <p className="font-medium">{product.specs.torque}</p>
                      </div>
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Weight</h4>
                        <p className="font-medium">{product.specs.weight}</p>
                      </div>
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Top Speed</h4>
                        <p className="font-medium">{product.specs.topSpeed}</p>
                      </div>
                      <div className="bg-muted/20 p-4 rounded">
                        <h4 className="text-sm text-muted-foreground mb-1">Fuel Capacity</h4>
                        <p className="font-medium">{product.specs.fuelCapacity}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/10 p-6 rounded-lg border">
                    <h3 className="text-lg font-medium mb-4">Key Highlights</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <span>Advanced rider-assistance systems for maximum safety</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <span>Multiple riding modes for different conditions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <span>Quick-shifter for seamless gear transitions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <span>Premium suspension for optimal handling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <span>High-performance braking system</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="features" className="py-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Performance Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">Electronic Throttle Control</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Precise throttle response for optimal control
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">Multiple Riding Modes</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Sport, Road, and Rain modes for versatile riding
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">Adjustable Suspension</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Fine-tune handling characteristics to match your riding style
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Comfort & Convenience</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">TFT Display</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            High-resolution display with multiple information layouts
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">Bluetooth Connectivity</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Connect to your smartphone for navigation and music control
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-primary/10 text-primary p-1 rounded mr-3 mt-0.5">✓</span>
                        <div>
                          <span className="font-medium">Ergonomic Design</span>
                          <p className="text-sm text-muted-foreground mt-1">
                            Designed for optimal rider comfort during long journeys
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="py-6">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Customer Reviews</h3>
                    <Button variant="outline">Write a Review</Button>
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Incredible Performance</p>
                          <div className="flex items-center text-yellow-500">
                            ★★★★★
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">2 weeks ago</p>
                      </div>
                      <p className="text-muted-foreground">
                        This bike exceeds all expectations. The performance is mind-blowing, and the build quality is exceptional. Definitely worth the investment for any serious rider.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Great Value</p>
                          <div className="flex items-center text-yellow-500">
                            ★★★★☆
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">1 month ago</p>
                      </div>
                      <p className="text-muted-foreground">
                        For the price, you're getting exceptional quality and performance. The only minor issue was with the initial setup, but customer service was very helpful.
                      </p>
                    </div>
                    <div className="text-center mt-8">
                      <Button variant="link">Load More Reviews</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
