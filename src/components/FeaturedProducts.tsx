
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCard from "./ProductCard";
import { allProducts } from "@/data/products";

export default function FeaturedProducts() {
  const [category, setCategory] = useState("all");
  
  const filteredProducts = category === "all" 
    ? allProducts.slice(0, 8) 
    : allProducts.filter(p => p.category === category).slice(0, 8);

  return (
    <section className="container py-16">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Featured Superbikes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our selection of high-performance motorcycles from renowned brands around the world.
        </p>
      </div>
      
      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setCategory("all")}>All</TabsTrigger>
            <TabsTrigger value="sport" onClick={() => setCategory("sport")}>Sport</TabsTrigger>
            <TabsTrigger value="naked" onClick={() => setCategory("naked")}>Naked</TabsTrigger>
            <TabsTrigger value="touring" onClick={() => setCategory("touring")}>Touring</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="sport" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="naked" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="touring" className="mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-10 text-center">
        <Button asChild>
          <Link to="/products">View All Superbikes</Link>
        </Button>
      </div>
    </section>
  );
}
