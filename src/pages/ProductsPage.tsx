
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { allProducts } from "@/data/products";
import { ChevronDown, ChevronUp, Filter, Search } from "lucide-react";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 3000000]);
  const [showFilters, setShowFilters] = useState(false);

  // Get unique brands and categories for filters
  const brands = Array.from(new Set(allProducts.map(product => product.brand)));
  const categories = Array.from(new Set(allProducts.map(product => product.category)));

  // Filter products based on all criteria
  const filteredProducts = allProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
    const matchesBrands = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesBrands && matchesPrice;
  });

  const toggleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter(b => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow container py-8">
        <h1 className="text-3xl font-bold mb-6">Superbikes Collection</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mobile filters toggle */}
          <Button
            variant="outline"
            className="flex items-center justify-between md:hidden mb-4"
            onClick={() => setShowFilters(!showFilters)}
          >
            <div className="flex items-center">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </div>
            {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>

          {/* Filters sidebar */}
          <div 
            className={`w-full md:w-64 space-y-6 ${showFilters ? 'block' : 'hidden'} md:block`}
          >
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Search</h3>
              <div className="flex items-center border rounded-md pl-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <Input 
                  type="text"
                  placeholder="Search bikes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Category</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Checkbox
                    id="all-categories"
                    checked={selectedCategory === ""}
                    onCheckedChange={() => setSelectedCategory("")}
                  />
                  <Label
                    htmlFor="all-categories"
                    className="ml-2 text-sm cursor-pointer"
                  >
                    All Categories
                  </Label>
                </div>
                
                {categories.map(category => (
                  <div key={category} className="flex items-center">
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategory === category}
                      onCheckedChange={() => setSelectedCategory(selectedCategory === category ? "" : category)}
                    />
                    <Label
                      htmlFor={`category-${category}`}
                      className="ml-2 text-sm capitalize cursor-pointer"
                    >
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Brands</h3>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand} className="flex items-center">
                    <Checkbox
                      id={`brand-${brand}`}
                      checked={selectedBrands.includes(brand)}
                      onCheckedChange={() => toggleBrand(brand)}
                    />
                    <Label
                      htmlFor={`brand-${brand}`}
                      className="ml-2 text-sm cursor-pointer"
                    >
                      {brand}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Price Range</h3>
              <Slider
                defaultValue={priceRange}
                min={0}
                max={3000000}
                step={50000}
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  ₹{priceRange[0].toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-muted-foreground">
                  ₹{priceRange[1].toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("");
                setSelectedBrands([]);
                setPriceRange([0, 3000000]);
              }}
            >
              Reset Filters
            </Button>
          </div>

          {/* Products grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                {filteredProducts.length} products found
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-lg text-muted-foreground">No products found matching your criteria</p>
                <Button 
                  variant="link" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("");
                    setSelectedBrands([]);
                    setPriceRange([0, 3000000]);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
